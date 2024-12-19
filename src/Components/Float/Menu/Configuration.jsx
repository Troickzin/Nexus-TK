import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";

export default async function Configuration() {
  return (
    <>
      <Link
        href="/settings"
        className="bg-nexus-dark-400/90 backdrop-blur-[5px] flex justify-center items-center rounded-full shadow-nexus-s10 size-7 hover:cursor-pointer hover:scale-110 transition-all hover:rotate-45 hover:text-nexus-white-50 active:bg-nexus-dark-100 active:text-nexus-primary-color active:scale-90 active:shadow-nexus-s5 active:shadow-nexus-primary-color"
      >
        <IoSettingsOutline className="size-5" />
      </Link>
    </>
  );
}
