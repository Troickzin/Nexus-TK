import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

config.autoAddCss = false;

import "./globals.css";
import Background from "@/Containers/Background";

export const metadata = {
  title: "Nexus TK",
  description: "HUB do Nexus TK",
};

export default async function LocaleLayout({ children, params }) {
  if (!routing.locales.includes(params.locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={params.locale} className="smooth-scroll">
      <head>
        <script
          src="https://kit.fontawesome.com/6981ddf6b6.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body className="bg-nexus-dark-500 font-alexandria selection:bg-nexus-primary-color/80 selection:text-nexus-green-300">
        <NextIntlClientProvider messages={messages}>
          <div
            className="relative z-10"
            style={{
              backgroundImage: "url('/images/grid_effect.png')",
              backgroundRepeat: "repeat",
              backgroundPosition: "10px",
            }}
          >
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// export default function Layout({ children }) {
//   return (
//     <html lang="pt" className="smooth-scroll">
//       <head>
//         <script
//           src="https://kit.fontawesome.com/6981ddf6b6.js"
//           crossOrigin="anonymous"
//           async
//         ></script>
//       </head>
//       <body className="bg-nexus-dark-500 font-alexandria">
//         <div
//           className="relative z-10"
//           style={{
//             backgroundImage: "url('/images/grid_effect.png')",
//             backgroundRepeat: "repeat",
//             backgroundPosition: "10pix",
//           }}
//         >
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }
