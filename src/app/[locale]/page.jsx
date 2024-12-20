import Overlay from "@/Components/Overlay/Overlay";
import Float_Menu from "@/Components/Float/Menu/Float_Menu";
import Navbar from "@/Components/Float/Navbar/Navbar";
import { useTranslations } from "next-intl";
import Random_Image from "@/Components/Random_Image";

import { Configs } from "@/Constants/Languages";
import { Link } from "@/i18n/routing";

const generateMatcher = (Configs) => {
  const paths = Configs.languages.map((lang) => `/${lang}/:path*`);
  console.log("/", ...paths);
  return ["/", ...paths];
};

// export const config = {
//   matcher: generateMatcher(languages),
// };

export default function Home() {
  const t = useTranslations("HomePage");
  const ButtonsTranslate = useTranslations("Buttons");
  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <div className="grid ml-[75px] mt-[160px] w-fit">
          <p className="text-nexus-white-100 text-4xl">{t("welcome")}</p>
          <p className="text-nexus-white-50 text-8xl mt-[-10px] mb-[-10px] font-bold">
            <span className="text-nexus-primary-color">N</span>EXUS{" "}
            <span className="text-nexus-primary-color">T</span>K
          </p>
          <p className="text-nexus-white-100 text-xl">{t("description")}</p>
          <div className="flex gap-1 justify-center items-center">
            <div className="h-[2px] w-1/2 rounded-sm bg-gradient-to-l from-nexus-white-50"></div>
            <div className="size-[6px] rounded-[1px] bg-nexus-green-300 rotate-45"></div>
            <div className="h-[2px] w-1/2 rounded-sm bg-gradient-to-r from-nexus-white-50"></div>
          </div>
        </div>

        <div className="absolute left-0 top-0 w-full h-full flex justify-center z-[1]">
          <Random_Image />
        </div>

        <div className="absolute ml-24 mb-36 left-0 bottom-0 flex justify-start items-center gap-5 z-20">
          <Link
            href={"/hub#test"}
            className="text-xl font-bold text-nexus-dark-300 rounded-lg bg-nexus-primary-color pl-12 pr-12 pt-1 pb-1 hover:scale-110 transition-all shadow-nexus-s10"
          >
            {ButtonsTranslate("HomePage.hub")}
          </Link>
          <Link
            href={"/about"}
            className="text-base font-bold text-nexus-white-300 rounded-lg bg-nexus-dark-50 pl-12 pr-12 pt-1 pb-1 hover:scale-110 transition-all shadow-nexus-s10"
          >
            {ButtonsTranslate("HomePage.about")}
          </Link>
        </div>

        <Navbar />
        <Float_Menu />
        <Overlay />
      </div>
    </>
  );
}
