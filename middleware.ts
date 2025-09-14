import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const { pathname } = req.nextUrl;
  const notAllowedUrls = ["/dashboard/features", "/dashboard/cancellation-policy"];
    console.log("notAllowedUrls", notAllowedUrls)

  console.log({ pathname });
  // Allow all public routes
  if (pathname.startsWith("/public")) {
    return NextResponse.next();
  }

      if (notAllowedUrls.includes(pathname)) {
      console.log("Redirecting to /dashboard");
      // return NextResponse.redirect(new URL("/dashboard", req.url));
    }


  // Get token (returns null if not authenticated)
  const token = await getToken({ req });
  console.log({ token, pathname });
  // If user tries to access dashboard but is not authenticated, redirect to /auth/login
  // if (pathname.startsWith("/dashboard")) {
  //   if (!token) {
  //     return NextResponse.redirect(new URL("/auth/login", req.url));
  //   }
    
  //   return NextResponse.next();
  // }

  // If user tries to access auth routes but IS authenticated, redirect to /dashboard
  if (pathname.startsWith("/auth")) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // For all other routes, allow
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|assets|favicon.ico).*)"],
};
