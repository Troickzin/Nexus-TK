"use client";
import { Link, usePathname } from "@/i18n/routing";
import { getSession, signIn, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import PMenu from "./Profile/PMenu";

export default function Profile() {
  const pathname = usePathname();
  const [session, setSession] = useState(null);

  console.log(session?.user?.image);

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      setSession(sessionData);
    }
    fetchSession();
  }, []);

  return (
    <>
      <details className="grid justify-center items-center relative group/details">
        <summary className="bg-nexus-dark-400 flex justify-center items-center rounded-full shadow-nexus-s10 w-8 h-8 hover:cursor-pointer hover:scale-110 group-open/details:scale-110 transition-all active:bg-nexus-dark-100 active:shadow-nexus-s5 group">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt="Profile Image"
              width={28}
              height={28}
              className="rounded-full w-7 h-7 outline-nexus-white-200 outline outline-1 group-hover:outline-nexus-white-50 group-active:outline-nexus-primary-color transition-all select-none group-open/details:outline-nexus-primary-color"
              draggable={false}
            />
          ) : (
            <>
              <div className="rounded-full w-7 h-7 outline-nexus-white-200 outline outline-1 group-hover:outline-nexus-white-50 group-active:outline-nexus-primary-color transition-all select-none group-open/details:outline-nexus-primary-color"></div>
            </>
          )}
        </summary>
        <PMenu />
      </details>
    </>
  );
}
