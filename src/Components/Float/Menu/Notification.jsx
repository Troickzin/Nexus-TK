import { IoMdNotificationsOutline } from "react-icons/io";

export default async function Notification() {
  return (
    <>
      <div className="bg-nexus-dark-400/90 backdrop-blur-[5px] flex justify-center items-center rounded-full shadow-nexus-s10 size-7 hover:cursor-pointer hover:scale-110 transition-all hover:text-nexus-white-50 active:bg-nexus-dark-100 active:text-nexus-primary-color active:scale-90 hover:rotate-[-12deg] active:shadow-nexus-s5 active:shadow-nexus-primary-color">
        <IoMdNotificationsOutline className="size-5" />
      </div>
    </>
  );
}
