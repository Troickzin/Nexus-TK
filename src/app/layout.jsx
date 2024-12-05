import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";

export const metadata = {
  title: "Nexus TK",
  description: "HUB do Nexus TK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="">
      <head>
        <script
          src="https://kit.fontawesome.com/6981ddf6b6.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body className="bg-nexus-bg-500 font-alexandria">{children}</body>
    </html>
  );
}
