const { NextResponse, NextRequest } = require("next/server");
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(pt|en|fr)/:path*"],
};

// export default function middleware(req) {
//   const isDev = req.cookies.get("user_token")?.value;
//   const aboutRoute = new URL("/about", req.url);

//   console.log(isDev);

//   if (isDev == "Dev") {
//     return NextResponse.next();
//   }

//   return NextResponse.redirect(aboutRoute);

//   return NextResponse.next();
// }
