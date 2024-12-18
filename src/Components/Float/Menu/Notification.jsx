import { IoMdNotificationsOutline } from "react-icons/io";

export default async function Notification() {
  return (
    <>
      <div className="bg-nexus-bg-400 flex justify-center items-center rounded-full shadow-nexus-s10 size-7 hover:cursor-pointer hover:scale-110 transition-all hover:text-nexus-txt-50 active:bg-nexus-bg-100 active:text-nexus-primary-color active:scale-90">
        <IoMdNotificationsOutline className="size-5" />
      </div>
    </>
  );
}
