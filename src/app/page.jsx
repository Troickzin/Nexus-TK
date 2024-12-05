import Overlay from "@/Components/Overlay";
import Icons from "@/Containers/Icons";
export default function Home() {
  return (
    <div className="text-nexus-txt-50 w-screen h-screen">
      <Overlay />
      <div className="w-full h-full flex items-center justify-center">
        <div className="size-[200px] border-nexus-primary-color/20 border-[10px] rounded-full absolute"></div>
        <div className="size-[250px] border-nexus-txt-50/20 border-[10px] rounded-full absolute"></div>
        <h1 className="text-4xl font-semibold text-nexus-txt-100 first-letter:text-nexus-primary-color absolute m-10 text-center">
          Site apenas para salvar arquivos JSON
        </h1>
      </div>
    </div>
  );
}
