import Image from "next/image";

export default function Loading() {
  return (
    <div className="text-nexus-white-50 w-screen h-screen overflow-hidden">
      <div className="w-full h-full flex items-center justify-center animate-sobd">
        <div className="size-[200px] bg-gradient-to-t from-nexus-primary-color/20 border-nexus-primary-color/75 border-[5px] box-border rounded-full absolute animate-spin"></div>
        <div className="size-[250px] from-nexus-white-50/20 border-nexus-white-50/75 border-[2px] box-border rounded-full absolute animate-newsping"></div>
        <div className="size-[250px] rounded-full absolute grid place-items-center">
          <Image
            src="/images/nx.png"
            width={150}
            height={150}
            alt="image"
            className=""
          ></Image>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
        <h1 className="text-4xl max-md:text-2xl font-semibold text-nexus-white-100 first-letter:text-nexus-primary-color absolute m-5 text-center top-0">
          Carregando
        </h1>
      </div>
    </div>
  );
}
