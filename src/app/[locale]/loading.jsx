import VersionText from "@/Components/Overlay/VersionText";
import { useTranslations } from "next-intl";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  const t = useTranslations("LoadingPage");
  return (
    <div className="text-nexus-white-50 w-screen h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="relative size-10">
          <div className="absolute size-10 animate-newsbigping border border-nexus-white-50 rounded-full scale-[0.10]" />
          <AiOutlineLoading3Quarters className="absolute size-10 animate-spin text-nexus-primary-color" />
        </div>
        <h1 className="text-4xl max-md:text-2xl font-semibold text-nexus-white-100 first-letter:text-nexus-primary-color m-5 text-center">
          {t("loading")}
        </h1>
        <VersionText />
      </div>
    </div>
  );
}
