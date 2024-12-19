export default function Footer() {
  return (
    <>
      <footer className="relative">
        <div className="text-nexus-white-50 bg-nexus-dark-300 w-screen relative">
          <div className="absolute right-0 max-lg:bottom-16 lg:top-0 max-lg:w-full lg:h-full grid justify-center content-center overflow-hidden z-0">
            <svg
              className="relative fill-current text-nexus-eft-700 z-0 max-lg:translate-y-[48%] lg:translate-x-[50%]"
              width="528"
              height="463"
              viewBox="0 0 528 463"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M244.413 7.88447C255.669 -1.81821 272.331 -1.81821 283.587 7.88446L516.639 208.777C530.523 220.745 530.523 242.255 516.639 254.223L283.587 455.116C272.331 464.818 255.669 464.818 244.413 455.116L11.3605 254.223C-2.52294 242.255 -2.52293 220.745 11.3606 208.777L244.413 7.88447Z" />
            </svg>
          </div>

          <div className="flex z-10 text-[15px]">
            <div className="grid lg:flex justify-center content-center w-full mt-10 mb-10">
              <div className="m-auto max-lg:mt-16 max-lg:mb-12 relative">
                <svg
                  className="relative z-20 fill-current text-nexus-eft-900"
                  width="120"
                  height="135"
                  viewBox="0 0 272 306"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="text-nexus-white-400"
                    d="M247.432 82.9626L140.466 21.2058C137.681 19.5981 134.251 19.5981 131.466 21.2058L24.5 82.9626C21.7154 84.5703 20 87.5415 20 90.7569V214.271C20 217.486 21.7154 220.457 24.5 222.065L131.466 283.822C134.251 285.429 137.681 285.429 140.466 283.822L247.432 222.065C250.217 220.457 251.932 217.486 251.932 214.271V90.7569C251.932 87.5415 250.217 84.5703 247.432 82.9626ZM150.466 3.88526C141.493 -1.29509 130.439 -1.29509 121.466 3.88526L14.5 65.6421C5.52737 70.8225 0 80.3962 0 90.7569V214.271C0 224.631 5.52737 234.205 14.5 239.385L121.466 301.142C130.439 306.322 141.493 306.322 150.466 301.142L257.432 239.385C266.405 234.205 271.932 224.631 271.932 214.271V90.7569C271.932 80.3961 266.405 70.8225 257.432 65.6421L150.466 3.88526Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="text-nexus-white-50"
                    d="M151.577 108.326H125.966V99.3262H155.98L179.94 130.149L203.557 99.3262H238.961L197.215 152.004L240.314 206.014H204.476L178.911 173.698L152.539 206.014H125.966V197.014H148.268L179.021 159.329L208.831 197.014H221.618L185.717 152.023L220.346 108.326H208L179.992 144.879L151.577 108.326Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="text-nexus-primary-color"
                    d="M36.216 99.3262H61.6353L116.903 128.265V99.3262H131.666L172.723 152.084L128.598 206.014H116.903V159.432L65.0285 132.429V206.014H36.216V99.3262ZM45.216 108.326V197.014H56.0285V117.598L125.903 153.97V195.095L161.209 151.943L127.266 108.326H125.903V143.137L59.4216 108.326H45.216Z"
                  />
                </svg>
              </div>
              <div className="lg:ml-auto lg:mr-auto max-lg:mt-10 relative pl-2 pr-2">
                <p className="font-bold text-[20px] first-letter:text-nexus-primary-color">
                  Contatos
                </p>
                <ul className="list-disc ml-5 lg:ml-10 mt-5">
                  <li>E-mail: nexustk@dwb.digital</li>
                  <li>
                    <a href="https://x.com/nexus_tk_mc" target="_blank">
                      X / Twitter: @nexus_tk_mc
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@NEXUS_TK_MC"
                      target="_blank"
                    >
                      Youtube: NEXUS TK MC
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:ml-auto lg:mr-auto max-lg:mt-10 relative pl-2 pr-2">
                <p className="font-bold text-[20px] first-letter:text-nexus-primary-color">
                  Navegação
                </p>
                <ul className="list-disc ml-5 lg:ml-10 mt-5">
                  <li>
                    <a href="#Home">Home</a>
                  </li>
                  <li>
                    <a href="#Sobre">Sobre</a>
                  </li>
                  <li>
                    <a href="#Detalhes">Detalhes</a>
                  </li>
                  <li>
                    <a href="#Apoio">Apoie</a>
                  </li>
                </ul>
              </div>

              <div className="lg:ml-auto lg:mr-auto max-lg:mt-10 relative pl-2 pr-2">
                <p className="font-bold text-[20px] first-letter:text-nexus-primary-color">
                  Dependências que serão usadas
                </p>
                <ul className="list-disc ml-5 lg:ml-10 mt-5">
                  <li>
                    <a href="https://www.minecraft.net" target="_blank">
                      Minecraft: Java Edition
                    </a>
                  </li>
                  <li>
                    <a href="https://mcreator.net/" target="_blank">
                      MCreator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://files.minecraftforge.net/net/minecraftforge/forge/"
                      target="_blank"
                    >
                      Forge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.curseforge.com/minecraft/mc-mods/geckolib"
                      target="_blank"
                    >
                      Geckolib
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.curseforge.com/minecraft/mc-mods/kleiders-custom-renderer-api"
                      target="_blank"
                    >
                      Kleiders Custom Renderer API
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.curseforge.com/minecraft/mc-mods/playeranimator"
                      target="_blank"
                    >
                      Player Animator
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:flex w-screen relative bg-nexus-dark-200 pt-2 pb-2">
            <div className="flex lg:absolute gap-x-4 lg:ml-10 max-lg:m-auto max-lg:mb-2">
              <img src="images/mcreator_icon.png" className="relative" />
              <img src="images/minecraft_icon.png" className="relative" />
              <div className="w-[24px] h-[24px] relative">
                <svg
                  className="relative z-20 fill-current text-nexus-eft-900"
                  height="24"
                  viewBox="0 0 272 306"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="text-nexus-white-400"
                    d="M247.432 82.9626L140.466 21.2058C137.681 19.5981 134.251 19.5981 131.466 21.2058L24.5 82.9626C21.7154 84.5703 20 87.5415 20 90.7569V214.271C20 217.486 21.7154 220.457 24.5 222.065L131.466 283.822C134.251 285.429 137.681 285.429 140.466 283.822L247.432 222.065C250.217 220.457 251.932 217.486 251.932 214.271V90.7569C251.932 87.5415 250.217 84.5703 247.432 82.9626ZM150.466 3.88526C141.493 -1.29509 130.439 -1.29509 121.466 3.88526L14.5 65.6421C5.52737 70.8225 0 80.3962 0 90.7569V214.271C0 224.631 5.52737 234.205 14.5 239.385L121.466 301.142C130.439 306.322 141.493 306.322 150.466 301.142L257.432 239.385C266.405 234.205 271.932 224.631 271.932 214.271V90.7569C271.932 80.3961 266.405 70.8225 257.432 65.6421L150.466 3.88526Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="text-nexus-white-50"
                    d="M151.577 108.326H125.966V99.3262H155.98L179.94 130.149L203.557 99.3262H238.961L197.215 152.004L240.314 206.014H204.476L178.911 173.698L152.539 206.014H125.966V197.014H148.268L179.021 159.329L208.831 197.014H221.618L185.717 152.023L220.346 108.326H208L179.992 144.879L151.577 108.326Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="text-nexus-primary-color"
                    d="M36.216 99.3262H61.6353L116.903 128.265V99.3262H131.666L172.723 152.084L128.598 206.014H116.903V159.432L65.0285 132.429V206.014H36.216V99.3262ZM45.216 108.326V197.014H56.0285V117.598L125.903 153.97V195.095L161.209 151.943L127.266 108.326H125.903V143.137L59.4216 108.326H45.216Z"
                  />
                </svg>
              </div>
            </div>
            <p className="m-auto first-letter:text-nexus-primary-color">
              Desenvovido por: Troick
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
