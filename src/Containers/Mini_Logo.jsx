import { Nexus_TK } from "./Icons/Nexus_TK";
export default function Mini_Logo(props) {
  return (
    <>
      <div className={props.TitleFix ? "fixed" : "absolute"}>
        <div className="absolute ml-[50px] mt-[40px] flex items-center">
          <Nexus_TK className="text-nexus-txt-50 size-[34px]" />
          <p className="text-[20px] font-semibold pl-[20px] text-nexus-txt-50 first-letter:text-nexus-primary-color min-w-36">
            NEXUS <span className="text-nexus-primary-color">T</span>K
          </p>
        </div>
      </div>
    </>
  );
}
