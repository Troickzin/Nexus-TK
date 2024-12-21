"use client";
import { Link, redirect, usePathname, useRouter } from "@/i18n/routing";
import { getSession, signIn, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { LuUserRound, LuUsers } from "react-icons/lu";
import { PiUsersThreeBold } from "react-icons/pi";
import { HiLogin, HiLogout } from "react-icons/hi";
import { GrLanguage } from "react-icons/gr";
import "@/css/Custom_Scroll.css";

import { Configs } from "@/Constants/Languages";

export default function PMenu(props) {
  const ButtonsTranslate = useTranslations("Buttons");
  const pathname = usePathname();
  const [session, setSession] = useState(null);
  const [language, setLanguage] = useState("");
  const username = session?.user?.name || ButtonsTranslate("Float_Menu.user");
  const router = useRouter();

  useEffect(() => {
    function getLanguageFromUrl() {
      const url = window.location.href;
      const urlParts = url.split("/");
      setLanguage(urlParts[3]);
    }

    getLanguageFromUrl();
    console.log("Current Language:", language);

    async function fetchSession() {
      const sessionData = await getSession();
      setSession(sessionData);
    }
    fetchSession();
  }, []);

  const languageOptions = Configs.languages.map((language, index) => (
    <li className="pb-1 mr-4 mt-2 last:pb-2 group snap-center" key={language}>
      <a
        // href={pathname}
        // locale={language}
        onClick={(e) => {
          router.push(pathname, { locale: language });
        }}
        className="hover:bg-nexus-primary-color group-even:hover:bg-nexus-green-700 group-even:text-nexus-white-450 text-nowrap
justify-end flex pl-10 transition-all
hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] items-center gap-2 pr-2 rounded-md cursor-pointer
relative"
      >
        {Configs.extend_language[language]}
        <GrLanguage />
      </a>
    </li>
  ));

  return (
    <>
      <div className="absolute grid justify-end right-0 p-2 pb-2 pt-2 mt-2 bg-nexus-dark-400/90 shadow-nexus-s15 backdrop-blur-[5px] rounded-md text-nexus-white-400">
        <ul
          className="gap-2 grid justify-end w-auto relative text-sm 
          [&_li:not(.language)>*]:justify-end [&_li:not(.language)>*]:flex [&_li:not(.language)>*]:pl-10 [&_li:not(.language)>*]:transition-all
          [&_li:not(.language)>*:hover]:text-nexus-dark-400 [&_li:not(.language)>*:active]:scale-95 [&_li:not(.language)>*:active]:bg-nexus-green-800 [&_li:not(.language)>*:hover]:scale-[1.02] [&_li:not(.language)>*]:items-center [&_li:not(.language)>*]:gap-2 [&_li:not(.language)>*]:pr-2 [&_li:not(.language)>*]:rounded-md [&_li:not(.language)>*]:cursor-pointer
            [&_li:not(:last-child)]:before:content-[''] [&_li:not(:last-child)]:before:bg-gradient-to-r [&_li:not(:last-child)]:before:from-transparent [&_li:not(:last-child)]:before:via-nexus-white-400 [&_li:not(:last-child)]:before:to-transparent 
            [&_li:not(:last-child)]:before:h-px [&_li:not(:last-child)]:before:w-full 
            [&_li:not(:last-child)]:before:absolute 
            [&_li:not(:last-child)]:before:bottom-0
            [&_li]:relative
            [&_li]:select-none
            [&_li>*]:select-none
            [&_li>*]:text-nowrap
            [&_li:not(:last-child)>*]:mb-2
          "
        >
          {session ? (
            <>
              <li>
                <a
                  onClick={(e) => {
                    router.push(`/profile/${username}`, { locale: language });
                  }}
                  className="hover:bg-nexus-primary-color"
                >
                  {username}
                  <LuUserRound />
                </a>
              </li>
              <li>
                <a className="hover:bg-nexus-primary-color">
                  {ButtonsTranslate("Float_Menu.groups")}
                  <PiUsersThreeBold />
                </a>
              </li>
              <li>
                <a className="hover:bg-nexus-primary-color">
                  {ButtonsTranslate("Float_Menu.friends")}
                  <LuUsers />
                </a>
              </li>
              <li
                className="relative language before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-nexus-white-400 before:to-transparent 
            before:h-px before:w-full 
            before:absolute 
            before:bottom-0"
              >
                <details className="group/detail">
                  <summary className="block group">
                    <a
                      className="hover:bg-nexus-primary-color text-nowrap
justify-end flex pl-10 transition-all
hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] items-center gap-2 pr-2 rounded-md cursor-pointer
relative
"
                    >
                      {ButtonsTranslate("Float_Menu.language") +
                        " : " +
                        Configs.extend_language[language] || ""}
                      <AiOutlineDown className="group-open/detail:rotate-180 transition-all" />
                    </a>
                  </summary>
                  <div className="relative pt-2">
                    <div className="absolute h-[90%] w-px bg-gradient-to-t from-transparent via-nexus-white-400 to-transparent right-0 mr-1 top-1/2 translate-y-[-50%]"></div>
                    <ul className="max-h-60 overflow-y-auto scroll-ml-0 customscrollbar snap-y">
                      {languageOptions}
                    </ul>
                  </div>
                </details>
              </li>
              <li>
                <a className="hover:bg-nexus-error" onClick={() => signOut()}>
                  {ButtonsTranslate("Float_Menu.logout")}
                  <HiLogout />
                </a>
              </li>
            </>
          ) : (
            <>
              <li
                className="relative language before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-nexus-white-400 before:to-transparent 
          before:h-px before:w-full 
          before:absolute 
          before:bottom-0"
              >
                <details className="group/detail">
                  <summary className="block group">
                    <a
                      className="hover:bg-nexus-primary-color text-nowrap
justify-end flex pl-10 transition-all
hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] items-center gap-2 pr-2 rounded-md cursor-pointer
relative
"
                    >
                      {ButtonsTranslate("Float_Menu.language") +
                        " : " +
                        Configs.extend_language[language] || ""}
                      <AiOutlineDown className="group-open/detail:rotate-180 transition-all" />
                    </a>
                  </summary>
                  <div className="relative pt-2">
                    <div className="absolute h-[90%] w-px bg-gradient-to-t from-transparent via-nexus-white-400 to-transparent right-0 mr-1 top-1/2 translate-y-[-50%]"></div>
                    <ul className="max-h-60 overflow-y-auto scroll-ml-0 customscrollbar snap-y">
                      {languageOptions}
                    </ul>
                  </div>
                </details>
              </li>

              <li>
                <Link
                  className="hover:bg-nexus-primary-color"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  {ButtonsTranslate("Float_Menu.login")}
                  <HiLogin />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
