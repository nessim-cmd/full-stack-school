// src/middleware.ts – custom JWT based auth middleware
import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth-edge";
import { routeAccessMap } from "./lib/settings";

/**
 * Middleware that checks the JWT cookie (named "auth") and enforces role‑based access.
 * It mirrors the previous Clerk‑based logic but works with our own JWT implementation.
 */
export async function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const token = req.cookies.get("auth")?.value;

  console.log("[Middleware] Path:", url.pathname);
  console.log("[Middleware] Token exists:", !!token);

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/apply"];
  const isPublicRoute = publicRoutes.includes(url.pathname);

  // If user is logged in and trying to access home page, redirect to their dashboard
  if (url.pathname === "/" && token) {
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
    return NextResponse.next();
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
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect all routes EXCEPT login, forgot-password, api/auth, api/registration, and static files
    "/((?!_next|login|forgot-password|api/auth|api/registration|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
