const { NextResponse, NextRequest } = require("next/server");

export default function middleware(req) {
  // const isDev = req.cookies.get("user_token")?.value;
  // const aboutRoute = new URL("/about", req.url);

  // console.log(isDev);

  // if (isDev == "Dev") {
  //   return NextResponse.next();
  // }

  // return NextResponse.redirect(aboutRoute);

  return NextResponse.next();
}

// export const config = {
//   matcher: [
//     "/",
//     "/login/:path*",
//     "/register/:path*",
//     "/help/:path*",
//     "/hub/:path*",
//   ],
// };
