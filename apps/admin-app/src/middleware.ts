import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Get the school slug from the hostname
function getSchoolSlug(hostname: string): string | null {
  // Remove port if present
  const host = hostname.split(':')[0];
  
  // Handle localhost subdomains: polytech.localhost, demo-school.localhost
  if (host.endsWith('.localhost')) {
    return host.replace('.localhost', '');
  }
  
  // Handle production subdomains: polytech.sudoschool.com
  const parts = host.split('.');
  if (parts.length >= 3) {
    return parts[0];
  }
  
  return null;
}

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  
  // Skip API routes and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Get school slug from subdomain
  const schoolSlug = getSchoolSlug(hostname);
  
  // If no subdomain, redirect to landing page
  if (!schoolSlug) {
    // This shouldn't happen in production as admin-app requires subdomain
    return NextResponse.next();
  }
  
  // Add school slug to headers so API routes can use it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-school-slug', schoolSlug);
  
  // Check if user is authenticated for protected routes
  const token = request.cookies.get('school_token')?.value;
  
  // List of public paths (don't require authentication)
  const publicPaths = ['/login', '/forgot-password', '/register'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));
  
  if (!token && !isPublicPath) {
    // Redirect to login
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }
  
  // If authenticated, validate school access
  if (token && !isPublicPath) {
    try {
      const payload = JSON.parse(Buffer.from(token, 'base64').toString());
      
      // Check if user's school slug matches current subdomain
      if (payload.schoolSlug !== schoolSlug) {
        // User trying to access different school
        const url = new URL('/login', request.url);
        url.searchParams.set('error', 'access_denied');
        return NextResponse.redirect(url);
      }
    } catch {
      // Invalid token, redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('school_token');
      return response;
    }
  }
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
