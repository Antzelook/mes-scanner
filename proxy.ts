import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // Public routes – ALWAYS accessible
  const publicPaths = [
    "/sign-in",
    "/api/auth",
    "/favicon.ico",
    "/_next",
    "/static"
  ];

  // Skip if path starts with public routes
  if (publicPaths.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Verify user token
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // No token → redirect to login
  if (!token) {
    const loginUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // User is authenticated → allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|api/auth).*)"],
};
