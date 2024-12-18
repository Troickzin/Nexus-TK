import Mini_Logo from "@/Containers/Mini_Logo";

export default function Overlay(props) {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-[32px] bg-nexus-bg-400 border-r-2 border-nexus-txt-400 shadow-shadow-nexus-s10 z-[100]" />
      <Mini_Logo TitleFix={props.TitleFix} />
    </>
  );
}
