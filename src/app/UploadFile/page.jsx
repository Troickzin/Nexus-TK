import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function page() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
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
          <h1 className="text-4xl max-md:text-2xl font-semibold text-nexus-txt-100 first-letter:text-nexus-primary-color absolute m-5 text-center top-0">
            Upload Files
          </h1>

          <div className="absolute w-screen h-screen grid items-center justify-center">
            <form className="bg-red-900">
              <div>
                <label htmlFor="upfile">Choose File</label>
                <input type="file" name="" id="upfile" className="hidden" />
              </div>
              <div></div>

              <div></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
