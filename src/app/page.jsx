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
      <div className="w-screen h-screen overflow-hidden">
        <div className="grid ml-[75px] mt-[160px] w-fit">
          <p className="text-nexus-txt-100 text-4xl">Bem-Vindo ao</p>
          <p className="text-nexus-txt-50 text-8xl mt-[-10px] mb-[-10px]">
            <span className="text-nexus-primary-color">N</span>EXUS{" "}
            <span className="text-nexus-primary-color">T</span>K
          </p>
          <p className="text-nexus-txt-100 text-xl">
            Um ecossistema para servidores Apocaliptico de Minecraft
          </p>
          <div className="flex gap-1 justify-center items-center">
            <div className="h-[2px] w-1/2 rounded-sm bg-gradient-to-l from-nexus-txt-50"></div>
            <div className="size-[6px] rounded-[1px] bg-nexus-eft-300 rotate-45"></div>
            <div className="h-[2px] w-1/2 rounded-sm bg-gradient-to-r from-nexus-txt-50"></div>
          </div>
        </div>
        <Float_Menu />
        <Overlay />
      </div>
    </>
  );
}
