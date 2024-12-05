import Mini_Logo from "@/Containers/Mini_Logo";

export default function Overlay(props) {
  return (
    <>
      <div className="w-full h-full top-0 left-0 absolute z-[1000]">
        <div className="fixed h-screen w-[30px] bg-nexus-bg-400 border-r-2 border-nexus-txt-400 shadow-shadow-nexus-s10" />
        <Mini_Logo TitleFix={props.TitleFix} />
      </div>
    </>
  );
}
