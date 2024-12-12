"use client";

import { signIn } from "next-auth/react";

export default function page() {
  return (
    <>
      <div>
        <button onClick={() => signIn("google", { callbackUrl: "/" })}>
          Login com o google
        </button>
      </div>
    </>
  );
}
