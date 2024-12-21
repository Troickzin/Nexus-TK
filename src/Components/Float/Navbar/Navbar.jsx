"use client";
import icons from "@/Containers/Icons";
import { Link, useRouter } from "@/i18n/routing";

import { TbCube } from "react-icons/tb";
import { LuServer } from "react-icons/lu";
import { BiCircle } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const ButtonsTranslate = useTranslations("Buttons");
  const router = useRouter();

  useEffect(() => {
    const setNavbarMargin = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.classList.remove("mt-[-60px]");
        navbar.classList.add("mt-10");
      }
    };

    // setNavbarMargin();

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 80) {
        navbar.setAttribute("data-small", "true");
      } else {
        navbar.setAttribute("data-small", "false");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="text-nexus-white-300 text-xs flex fixed top-0 left-1/2 translate-x-[-50%] rounded-full mt-10 bg-nexus-dark-400/90 z-50 items-center shadow-nexus-s10 border-2 border-nexus-dark-300 backdrop-blur-[5px] gap-3 p-[2px] data-[small=false]:pl-[6px] data-[small=false]:pr-[6px] group/navbar transition-[margin] duration-[1s] select-none [&>*:active]:text-nexus-dark-400"
        data-small="false"
        id="navbar"
      >
        <a
          onClick={(e) => {
            router.push("/mods");
          }}
          className="pl-[6px] pr-[6px] group-data-[small=false]/navbar:w-40 h-6 text-center rounded-full flex items-center justify-center gap-1 hover:bg-nexus-primary-color hover:text-nexus-dark-400 transition-all hover:scale-105 active:scale-90 active:bg-nexus-green-700 group/button duration-75 group-data-[small=true]/navbar:duration-[0.3s]"
          style={{ interpolateSize: "allow-keywords" }}
        >
          <AiOutlineFile className="size-3 group-hover/button:scale-125 group-active/button:scale-125 transition-all duration-75" />
          <div
            className="group-data-[small=true]/navbar:w-0 group-data-[small=true]/navbar:text-nexus-dark-400 group-data-[small=true]/navbar:group-hover/button:w-auto group-data-[small=true]/navbar:group-active/button:w-auto overflow-hidden transition-all duration-75 group-data-[small=true]/navbar:duration-[0.3s]"
            style={{ interpolateSize: "allow-keywords" }}
          >
            <p className="whitespace-nowrap">
              {ButtonsTranslate("Navbar.mods_packs")}
            </p>
          </div>
        </a>
        <a
          onClick={(e) => {
            router.push("/projects");
          }}
          className="pl-[6px] pr-[6px] group-data-[small=false]/navbar:w-40 h-6 text-center rounded-full flex items-center justify-center gap-1 hover:bg-nexus-primary-color hover:text-nexus-dark-400 transition-all hover:scale-105 active:scale-90 active:bg-nexus-green-700 group/button duration-75 group-data-[small=true]/navbar:duration-[0.3s]"
          style={{ interpolateSize: "allow-keywords" }}
        >
          <BiCircle className="size-3 group-hover/button:scale-125 group-active/button:scale-125 transition-all duration-75" />
          <div
            className="group-data-[small=true]/navbar:w-0 group-data-[small=true]/navbar:text-nexus-dark-400 group-data-[small=true]/navbar:group-hover/button:w-auto group-data-[small=true]/navbar:group-active/button:w-auto overflow-hidden transition-all duration-75 group-data-[small=true]/navbar:duration-[0.3s]"
            style={{ interpolateSize: "allow-keywords" }}
          >
            <p className="whitespace-nowrap">
              {ButtonsTranslate("Navbar.projects")}
            </p>
          </div>
        </a>
        <a
          onClick={(e) => {
            router.push("/");
          }}
        >
          <icons.Nexus_TK
            className="size-[20px] group-data-[small=false]/navbar:size-[30px] ml-3 mr-3 mt-[-5px] mb-[-5px] transition-all hover:scale-125 active:scale-110"
            color2="fill-nexus-white-400 group-hover/icon:fill-nexus-primary-color group-active/icon:fill-nexus-green-700 transition-all"
            color1="fill-nexus-white-50 group-active/icon:fill-nexus-white-200 transition-all"
          />
        </a>
        <a
          onClick={(e) => {
            router.push("/hub");
          }}
          className="pl-[6px] pr-[6px] group-data-[small=false]/navbar:w-40 h-6 text-center rounded-full flex items-center justify-center gap-1 hover:bg-nexus-primary-color hover:text-nexus-dark-400 transition-all hover:scale-105 active:scale-90 active:bg-nexus-green-700 group/button duration-75 group-data-[small=true]/navbar:duration-[0.3s]"
          style={{ interpolateSize: "allow-keywords" }}
        >
          <TbCube className="size-3 group-hover/button:scale-125 group-active/button:scale-125 transition-all duration-75" />
          <div
            className="group-data-[small=true]/navbar:w-0 group-data-[small=true]/navbar:text-nexus-dark-400 group-data-[small=true]/navbar:group-hover/button:w-auto group-data-[small=true]/navbar:group-active/button:w-auto overflow-hidden transition-all duration-75 group-data-[small=true]/navbar:duration-[0.3s]"
            style={{ interpolateSize: "allow-keywords" }}
          >
            <p className="whitespace-nowrap">
              {ButtonsTranslate("Navbar.hub")}
            </p>
          </div>
        </a>
        <a
          onClick={(e) => {
            router.push("/servers");
          }}
          className="pl-[6px] pr-[6px] group-data-[small=false]/navbar:w-40 h-6 text-center rounded-full flex items-center justify-center gap-1 hover:bg-nexus-primary-color hover:text-nexus-dark-400 transition-all hover:scale-105 active:scale-90 active:bg-nexus-green-700 group/button duration-75 group-data-[small=true]/navbar:duration-[0.3s]"
          style={{ interpolateSize: "allow-keywords" }}
        >
          <LuServer className="size-3 group-hover/button:scale-125 group-active/button:scale-125 transition-all duration-75" />
          <div
            className="group-data-[small=true]/navbar:w-0 group-data-[small=true]/navbar:text-nexus-dark-400 group-data-[small=true]/navbar:group-hover/button:w-auto group-data-[small=true]/navbar:group-active/button:w-auto overflow-hidden transition-all duration-75 group-data-[small=true]/navbar:duration-[0.3s]"
            style={{ interpolateSize: "allow-keywords" }}
          >
            <p className="whitespace-nowrap">
              {ButtonsTranslate("Navbar.servers")}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
