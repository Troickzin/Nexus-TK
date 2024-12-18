import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession();

  if (session) {
    return (
      <>
        <button className="bg-nexus-bg-400 flex justify-center items-center rounded-full shadow-nexus-s10 w-8 h-8 hover:cursor-pointer hover:scale-110 transition-all active:bg-nexus-bg-100 active:scale-90 group">
          <Image
            src={session ? session.user?.image : "/images/userLogout.png"}
            alt="Profile Image"
            width={28}
            height={28}
            className="rounded-full w-7 h-7 outline-nexus-txt-200 outline outline-1 group-hover:outline-nexus-txt-50 group-checked:outline-nexus-primary-color transition-all select-none"
            draggable={false}
          />
        </button>
      </>
    );
  }

  return <></>;
}
