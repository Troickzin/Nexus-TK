import Overlay from "@/Components/Overlay";
import Icons from "@/Containers/Icons";
import Image from "next/image";
export default function Home() {
  return (
    <div className="text-nexus-txt-50 w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="size-[200px] border-nexus-primary-color/20 border-[5px] rounded-full absolute"></div>
        <div className="size-[250px] border-nexus-txt-50/20 border-[8px] rounded-full absolute"></div>
        <div className="size-[250px] rounded-full absolute grid place-items-center">
          <Image
            src="/images/nx.png"
            width={150}
            height={150}
            alt="image"
            className=""
          ></Image>
        </div>
        <h1 className="text-4xl font-semibold text-nexus-txt-100 first-letter:text-nexus-primary-color absolute m-10 text-center top-10">
          Site apenas para salvar arquivos JSON
        </h1>
      </div>
    </div>
  );
}
