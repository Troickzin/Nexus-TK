import Profile from "./Profile";
import Configuration from "./Configuration";
import Notification from "./Notification";

export default function Float_Menu() {
  return (
    <>
      <div className="flex fixed top-10 right-10 justify-center items-center gap-2 text-nexus-white-200 z-50">
        <Notification />
        <Configuration />
        <Profile />
      </div>
    </>
  );
}
