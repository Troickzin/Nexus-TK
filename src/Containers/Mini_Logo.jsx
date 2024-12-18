import icons from "./Icons";
export default function Mini_Logo(props) {
  return (
    <>
      <div
        className={
          props.TitleFix ? "fixed top-0 left-0" : "absolute top-0 left-0"
        }
      >
        <div className="absolute ml-[70px] mt-[40px] flex items-center">
          <icons.Nexus_TK
            className="size-[38px]"
            color2="fill-nexus-primary-color"
            color1="fill-nexus-txt-50"
          />
        </div>
      </div>
    </>
  );
}
