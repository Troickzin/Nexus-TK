import Float_Menu from "@/Components/Float/Menu/Float_Menu";
import Navbar from "@/Components/Float/Navbar/Navbar";
import Overlay from "@/Components/Overlay";
import Image from "next/image";

export const metadata = {
  title: "Nexus TK - HUB",
};

export default async function Hub() {
  return (
    <>
      <div className="text-nexus-white-50 w-full h-full relative z-10">
        <div className="relative top-0 left-0 w-full h-screen ">
          <div className="w-full h-full flex items-center justify-center">
            <div className="size-[200px] bg-gradient-to-t from-nexus-primary-color/20 border-nexus-primary-color/75 border-[5px] box-border rounded-full absolute animate-spin"></div>
            <div className="size-[250px] from-nexus-white-50/20 border-nexus-white-50/75 border-[2px] box-border rounded-full absolute animate-newsping"></div>
            <div className="size-[250px] rounded-full absolute grid place-items-center">
              <Image
                src="/images/nx.png"
                width={150}
                height={150}
                alt="image"
                className=""
              />
            </div>
          </div>
        </div>
        <div
          className="relative w-full h-screen border border-red-500"
          id="test"
        ></div>
      </div>
      <Navbar />
      <Float_Menu />
      <Overlay TitleFix="true" />
    </>
  );
}
