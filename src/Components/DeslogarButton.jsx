"use client";
import { signOut } from "next-auth/react";

export default function DeslogarButton() {
  return (
    <div>
      <button onClick={(e) => signOut()}>Deslogar</button>
    </div>
  );
}
