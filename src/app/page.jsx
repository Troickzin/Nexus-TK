import Image from "next/image";
import TestForm from "@/Components/TestForm";
import { signOut } from "next-auth/react";
import DeslogarButton from "@/Components/DeslogarButton";

export default async function Home() {
  return (
    <div className="text-nexus-txt-50 w-screen h-screen overflow-hidden">
      <div className="w-full h-full flex items-center justify-center animate-sobd">
        <div className="size-[200px] bg-gradient-to-t from-nexus-primary-color/20 border-nexus-primary-color/75 border-[5px] box-border rounded-full absolute animate-spin"></div>
        <div className="size-[250px] from-nexus-txt-50/20 border-nexus-txt-50/75 border-[2px] box-border rounded-full absolute animate-newsping"></div>
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
        <h1 className="text-4xl max-md:text-2xl font-semibold text-nexus-txt-100 first-letter:text-nexus-primary-color absolute m-10 text-center top-10">
          Hospedando arquivos necessario para o <br />
          <span className="text-nexus-txt-50 text-5xl max-md:text-3xl">
            <span className="text-nexus-primary-color ">N</span>
            EXUS &nbsp;
            <span className="text-nexus-primary-color ">T</span>K
          </span>
        </h1>
      </div>
      <div className="absolute max-xl:bottom-0 xl:top-0 xl:right-0 w-screen xl:w-auto xl:h-screen flex xl:grid items-center justify-center">
        <div className="overflow-x-auto snap-x gap-16 flex xl:grid xl:gap-5 max-xl:mt-20 max-xl:mb-5 xl:ml-20 xl:mr-20 max-xl:pt-4 max-xl:pl-8 max-xl:pr-8 xl:pl-4 xl:pt-8 xl:pb-8 max-xl:border-t-2 xl:border-l-2 border-nexus-txt-400">
          <div className="snap-start">
            <p className="text-nexus-txt-50">Packs</p>
            <ul className="ml-4 mt-2 text-nexus-txt-100">
              <li>
                <p>Minecraft</p>
                <ul className="ml-4 mt-2 text-nexus-primary-color">
                  <li>
                    <a href="jsons/Packs/Minecraft/Consumables.json">
                      Consumables
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Canned Food</p>
                <ul className="ml-4 mt-2 text-nexus-primary-color">
                  <li>
                    <a href="jsons/Packs/Canned_Food/Consumables.json">
                      Consumables
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="snap-start">
            <p className="text-nexus-txt-50">Player</p>
            <ul className="ml-4 mt-2 text-nexus-primary-color">
              <li>
                <a href="jsons/Player/Configurations.json">Configurations</a>
              </li>
            </ul>
          </div>
          <div className="snap-start">
            <p className="text-nexus-txt-50">Server</p>
            <ul className="ml-4 mt-2 text-nexus-primary-color">
              <li>
                <a href="jsons/Server/Configurations.json">Configurations</a>
              </li>
            </ul>
          </div>
        </div>
        <DeslogarButton />
      </div>
      {/* <TestForm></TestForm> */}
    </div>
  );
}
