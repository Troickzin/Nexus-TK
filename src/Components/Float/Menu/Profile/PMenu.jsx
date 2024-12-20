"use client";
import { Link, usePathname } from "@/i18n/routing";
import { getSession, signIn, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { LuUserRound, LuUsers } from "react-icons/lu";
import { PiUsersThreeBold } from "react-icons/pi";
import { HiLogin, HiLogout } from "react-icons/hi";
import { GrLanguage } from "react-icons/gr";

import { Configs } from "@/Constants/Languages";

export default function PMenu() {
  const ButtonsTranslate = useTranslations("Buttons");
  const pathname = usePathname();
  const [session, setSession] = useState(null);
  const [language, setLanguage] = useState("");

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
  });

  const languageOptions = Configs.languages.map((language, index) => (
    <li className="relative pb-2" key={language}>
      <Link
        href={pathname}
        locale={language}
        className="hover:bg-nexus-primary-color hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] transition-all w-full flex justify-end items-center gap-2 pr-2 pl-40 rounded-md cursor-pointer"
      >
        {Configs.extend_language[language]}
        <GrLanguage />
      </Link>
      {index !== Configs.languages.length - 1 && (
        <div className="after:content-[''] after:bg-gradient-to-r after:from-transparent after:via-nexus-white-400 after:to-transparent after:h-px after:w-full after:absolute after:bottom-0"></div>
      )}
    </li>
  ));

  return (
    <>
      <div className="absolute grid justify-end right-0 p-2 pb-2 pt-2 mt-2 gap-2 bg-nexus-dark-400/90 shadow-nexus-s15 backdrop-blur-[5px] rounded-md text-nexus-white-400">
        <ul className="gap-2 grid justify-end w-auto relative text-sm">
          {session ? (
            <>
              <li className="relative pb-2 w-full">
                <Link
                  href={`/profile/${session.user.name}`}
                  className="hover:bg-nexus-primary-color hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] transition-all flex justify-end items-center gap-2 pr-2 pl-40 rounded-md cursor-pointer"
                >
                  {session.user.name || ButtonsTranslate("Float_Menu.user")}
                  <LuUserRound />
                </Link>
                <div className="after:content-[''] after:bg-gradient-to-r after:from-transparent after:via-nexus-white-400 after:to-transparent after:h-px after:w-full after:absolute after:bottom-0"></div>
              </li>
              <li className="relative pb-2">
                <Link
                  href="/settings#groups"
                  className="hover:bg-nexus-primary-color hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] transition-all flex justify-end items-center gap-2 pr-2 pl-40 rounded-md cursor-pointer"
                >
                  {ButtonsTranslate("Float_Menu.groups")}
                  <PiUsersThreeBold />
                </Link>
                <div className="after:content-[''] after:bg-gradient-to-r after:from-transparent after:via-nexus-white-400 after:to-transparent after:h-px after:w-full after:absolute after:bottom-0"></div>
              </li>
              <li className="relative pb-2">
                <a className="hover:bg-nexus-primary-color hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] transition-all flex justify-end items-center gap-2 pr-2 pl-40 rounded-md cursor-pointer">
                  {ButtonsTranslate("Float_Menu.friends")}
                  <LuUsers />
                </a>
                <div className="after:content-[''] after:bg-gradient-to-r after:from-transparent after:via-nexus-white-400 after:to-transparent after:h-px after:w-full after:absolute after:bottom-0"></div>
              </li>
              <li className="relative pb-2">
                <details className="group/detail">
                  <summary className="block group">
                    <a className="hover:bg-nexus-primary-color hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] transition-all flex justify-end items-center gap-2 pr-2 rounded-md cursor-pointer">
                      {ButtonsTranslate("Float_Menu.language") +
                        " : " +
                        Configs.extend_language[language] || ""}
                      <AiOutlineDown className="group-open/detail:rotate-180 transition-all" />
                    </a>
                  </summary>

                  <ul className="gap-2 grid justify-end w-full relative text-sm pt-3 pb-1 pr-2">
                    {languageOptions}
                  </ul>
                </details>
                <div className="after:content-[''] after:bg-gradient-to-r after:from-transparent after:via-nexus-white-400 after:to-transparent after:h-px after:w-full after:absolute after:bottom-0"></div>
              </li>
              <li>
                <a
                  className="hover:bg-nexus-error hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] transition-all flex justify-end items-center gap-2 pr-2 pl-40 rounded-md cursor-pointer"
                  onClick={() => signOut()}
                >
                  {ButtonsTranslate("Float_Menu.logout")}
                  <HiLogout />
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="relative pb-2">
                <details className="group/detail">
                  <summary className="block group">
                    <a className="hover:bg-nexus-primary-color ml-10 hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] transition-all flex justify-end items-center gap-2 pr-2 rounded-md cursor-pointer">
                      {ButtonsTranslate("Float_Menu.language") +
                        " : " +
                        Configs?.extend_language[language] || ""}
                      <AiOutlineDown className="group-open/detail:rotate-180 transition-all" />
                    </a>
                  </summary>

                  <ul className="gap-2 grid justify-end w-full relative text-sm pt-3 pb-1 pr-2">
                    {languageOptions}
                  </ul>
                </details>
                <div className="after:content-[''] after:bg-gradient-to-r after:from-transparent after:via-nexus-white-400 after:to-transparent after:h-px after:w-full after:absolute after:bottom-0"></div>
              </li>
              <li>
                <a
                  className="hover:bg-nexus-primary-color ml-10 hover:text-nexus-dark-400 active:scale-95 active:bg-nexus-green-800 hover:scale-[1.02] transition-all flex justify-end items-center gap-2 pr-2 pl-20 rounded-md cursor-pointer"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  {ButtonsTranslate("Float_Menu.login")}
                  <HiLogin />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
