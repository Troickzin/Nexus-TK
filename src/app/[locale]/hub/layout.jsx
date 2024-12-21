import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import Background from "@/Containers/Background";

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
      <body className="bg-nexus-dark-500 font-alexandria">
        <div
          className="relative z-10"
          style={{
            backgroundImage: "url('/images/grid_effect.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: "10pix",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
