// src/middleware.ts – custom JWT based auth middleware with subdomain support
import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth-edge";
import { routeAccessMap } from "./lib/settings";

/**
 * Extract subdomain from hostname
 * Examples:
 * - polytech.localhost:3000 -> "polytech"
 * - springfield.localhost:3000 -> "springfield"
 * - localhost:3000 -> null
 * - www.example.com -> null
 */
function getSubdomain(hostname: string): string | null {
  // Remove port if present
  const host = hostname.split(':')[0];

  // Split by dots
  const parts = host.split('.');

  // For localhost: subdomain.localhost -> parts = ["subdomain", "localhost"]
  if (parts.length >= 2 && parts[parts.length - 1] === 'localhost') {
    const subdomain = parts[0];
    // Ignore 'www' and return null for plain localhost
    if (subdomain === 'www' || subdomain === 'localhost') {
      return null;
    }
    return subdomain;
  }

  // For production domains: subdomain.example.com -> parts = ["subdomain", "example", "com"]
  if (parts.length >= 3) {
    const subdomain = parts[0];
    if (subdomain === 'www') {
      return null;
    }
    return subdomain;
  }

  return null;
}

/**
 * Middleware that checks the JWT cookie (named "auth") and enforces role‑based access.
 * Also handles subdomain-based school routing.
 */
export async function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const hostname = req.headers.get('host') || '';
  const subdomain = getSubdomain(hostname);
  const token = req.cookies.get("auth")?.value;

  console.log("[Middleware] Host:", hostname);
  console.log("[Middleware] Subdomain:", subdomain);
  console.log("[Middleware] Path:", url.pathname);
  console.log("[Middleware] Token exists:", !!token);

  // If subdomain exists, store it in a header for the app to use
  const response = NextResponse.next();
  if (subdomain) {
    response.headers.set('x-school-slug', subdomain);
    console.log("[Middleware] Set school slug header:", subdomain);
  }

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/apply"];
  // Also allow all /saas routes, /api/auth routes, and /super-admin/login to be public
  const isSaasRoute = url.pathname.startsWith("/saas");
  const isAuthRoute = url.pathname.startsWith("/api/auth");
  const isSuperAdminLogin = url.pathname === "/super-admin/login";
  const isPublicRoute = publicRoutes.includes(url.pathname) || isSaasRoute || isAuthRoute || isSuperAdminLogin;

  // If on a subdomain and accessing root, it's the school homepage (public)
  if (subdomain && url.pathname === "/") {
    console.log("[Middleware] School homepage, allowing access");
    return response;
  }

  // If NO subdomain and accessing root, it's the SaaS landing page
  if (!subdomain && url.pathname === "/") {
    console.log("[Middleware] No subdomain on root, rewriting to /saas");
    return NextResponse.rewrite(new URL("/saas", req.url));
  }

  // If user is logged in and trying to access home page (no subdomain), redirect to their dashboard
  if (url.pathname === "/" && token && !subdomain) {
    const payload = await verifyToken(token);
    if (payload) {
      const role = (payload as any).role as string | undefined;
      if (role) {
        console.log("[Middleware] Logged in user on home, redirecting to", `/${role}`);
        return NextResponse.redirect(new URL(`/${role}`, req.url));
      }
    }
  }

  // If no token and not a public route, redirect to the login page
  if (!token && !isPublicRoute) {
    console.log("[Middleware] No token, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If no token but on public route, allow access
  if (!token && isPublicRoute) {
    console.log("[Middleware] Public route, allowing access");
    return response;
  }

  const payload = await verifyToken(token!);
  console.log("[Middleware] Payload:", payload);

  if (!payload) {
    // Invalid / expired token – clear cookie and send to login
    console.log("[Middleware] Invalid token, redirecting to login");
    const resp = NextResponse.redirect(new URL("/login", req.url));
    resp.cookies.delete("auth");
    return resp;
  }

  const role = (payload as any).role as string | undefined;
  console.log("[Middleware] User role:", role);

  // Find the matcher for the current pathname
  const matcherEntry = Object.entries(routeAccessMap).find(([pattern]) =>
    new RegExp(pattern).test(url.pathname)
  );

  if (matcherEntry) {
    const [, allowedRoles] = matcherEntry as [string, string[]];
    console.log("[Middleware] Route requires roles:", allowedRoles);
    console.log("[Middleware] User has role:", role);

    if (role && !allowedRoles.includes(role)) {
      // User has a role but is not allowed for this route – redirect to their dashboard
      console.log("[Middleware] Role not allowed, redirecting to", `/${role}`);
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    } else if (!role) {
      // User doesn't have a role, redirect to login
      console.log("[Middleware] No role found, redirecting to login");
      const resp = NextResponse.redirect(new URL("/login", req.url));
      resp.cookies.delete("auth");
      return resp;
    }
  }

  // All good – let the request continue
  console.log("[Middleware] Allowing request through");
  return response;
}

export const config = {
  matcher: [
    // Protect all routes EXCEPT login, forgot-password, saas, api/saas, api/registration, and static files
    // Removed api/auth from exclusion so middleware runs and sets headers
    "/((?!_next|login|forgot-password|saas|api/saas|api/registration|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
