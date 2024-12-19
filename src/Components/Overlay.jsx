import Mini_Logo from "@/Containers/Mini_Logo";

export default function Overlay(props) {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-[32px] bg-nexus-dark-400 border-r-2 border-nexus-white-400 shadow-shadow-nexus-s10 z-[100]" />
      <Mini_Logo TitleFix={props.TitleFix} />
    </>
  );
}
