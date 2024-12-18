import Profile from "./Profile";
import Configuration from "./Configuration";
import Notification from "./Notification";

export default function Float_Menu() {
  return (
    <>
      <div className="flex absolute top-10 right-10 justify-center items-center gap-2 text-nexus-txt-200">
        <Notification />
        <Configuration />
        <Profile />
      </div>
    </>
  );
}
