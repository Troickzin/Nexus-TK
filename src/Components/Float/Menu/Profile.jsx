"use client";
import { getSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      setSession(sessionData);
    }
    fetchSession();
  }, []);

  return (
    <>
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          role="button"
          className="bg-nexus-dark-400 flex justify-center items-center rounded-full shadow-nexus-s10 w-8 h-8 hover:cursor-pointer hover:scale-110 transition-all active:bg-nexus-dark-100 active:shadow-nexus-primary-color active:shadow-nexus-s5 active:scale-90 group"
        >
          <Image
            src={session?.user?.image || "/images/userLogout.png"}
            alt="Profile Image"
            width={28}
            height={28}
            className="rounded-full w-7 h-7 outline-nexus-white-200 outline outline-1 group-hover:outline-nexus-white-50 group-active:outline-nexus-primary-color transition-all select-none"
            draggable={false}
          />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu z-[1] w-52 p-1 pb-2 pt-2 mt-2 gap-2 shadow bg-nexus-dark-400/90 backdrop-blur-[5px] rounded-md text-nexus-white-400 
          [&_li:not(:last-child)]:relative [&_li:not(:last-child)]:pb-2 [&_li>*]:rounded-md [&_li>*]:h-6 [&_li>*]:text-sm [&_li>*]:flex [&_li>*]:items-center [&_li>*]:justify-end [&_li>*]:p-0 [&_li>*]:pr-4 [&_li>*:hover]:text-nexus-dark-400 [&_li>*:active]:text-nexus-dark-400 [&_li>*:hover]:bg-gradient-to-l [&_li>*:hover:not(.error-color)]:from-nexus-primary-color [&_li>*:hover:not(.error-color)]:to-nexus-green-800 [&_li>*:hover:is(.error-color)]:from-nexus-error [&_li>*:hover:is(.error-color)]:to-nexus-secundary-color
          [&_li>*:hover]:scale-[1.02] [&_li>*:not(.error-color):active]:shadow-nexus-primary-color  [&_li>*:is(.error-color):active]:shadow-nexus-error [&_li>*:active]:shadow-nexus-s5 [&_li>*:focus]:bg-transparent
          [&_li:not(:last-child)]:before:content-[''] [&_li:not(:last-child)]:before:absolute [&_li:not(:last-child)]:before:bottom-0 [&_li:not(:last-child)]:before:left-0 [&_li:not(:last-child)]:before:right-0 [&_li:not(:last-child)]:before:h-[1px] [&_li:not(:last-child)]:before:bg-gradient-to-r [&_li:not(:last-child)]:before:via-nexus-white-400 [&_li:not(:last-child)]:before:to-transparent [&_li:not(:last-child)]:before:from-transparent
          "
        >
          {session ? (
            <>
              <li>
                <Link href={`/profile/${session.user.name}`}>
                  {session.user.name || "User"}
                </Link>
              </li>
              <li>
                <Link href="/settings#groups">Groups</Link>
              </li>
              <li>
                <Link href="/settings#friends">Friends</Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="error-color"
                  onClick={() => signOut()}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="#"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
