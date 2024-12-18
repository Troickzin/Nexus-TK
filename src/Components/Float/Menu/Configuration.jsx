import { IoSettingsOutline } from "react-icons/io5";

export default async function Configuration() {
  return (
    <>
      <button className="bg-nexus-bg-400 flex justify-center items-center rounded-full shadow-nexus-s10 size-7 hover:cursor-pointer hover:scale-110 transition-all hover:rotate-45 hover:text-nexus-txt-50 active:bg-nexus-bg-100 active:text-nexus-primary-color active:scale-90">
        <IoSettingsOutline className="size-5" />
      </button>
    </>
  );
}
