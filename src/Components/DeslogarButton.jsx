"use client";

import { getSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function DeslogarButton() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="absolute w-screen bottom-0 left-0">
      <div className="relative flex gap-10 mb-10 ml-10">
        {session ? (
          <button
            onClick={() => signOut()}
            className="btn btn-outline p-2 pl-5 pr-5"
          >
            Deslogar
          </button>
        ) : (
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="btn btn-outline p-2 pl-5 pr-5"
          >
            Logar
          </button>
        )}
      </div>
    </div>
  );
}
