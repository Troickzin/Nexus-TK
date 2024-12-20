import Image from "next/image";
import TestForm from "@/Components/TestForm";
import Profile from "@/Components/Float/Menu/Profile";
import { signOut } from "next-auth/react";
import DeslogarButton from "@/Components/DeslogarButton";
import FilesRouter from "@/Components/FilesRouter";
import Overlay from "@/Components/Overlay";
import Background from "@/Containers/Background";
import Float_Menu from "@/Components/Float/Menu/Float_Menu";

export default async function Home() {
  return (
    <>
      <div className="text-nexus-white-50 w-screen h-screen overflow-hidden absolute z-10">
        <div className="w-full h-full flex items-center justify-center animate-sobd">
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
        <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
          <h1 className="text-4xl max-md:text-2xl font-semibold text-nexus-white-100 first-letter:text-nexus-primary-color absolute m-5 text-center top-0">
            Listas dos arquivos do <br />
            <span className="text-nexus-white-50 text-5xl max-md:text-3xl">
              <span className="text-nexus-primary-color ">N</span>
              EXUS &nbsp;
              <span className="text-nexus-primary-color ">T</span>K
            </span>
          </h1>
        </div>

        <DeslogarButton />
        <FilesRouter />
      </div>
    </>
  );
}
