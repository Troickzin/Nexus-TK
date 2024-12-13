import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession();

  if (session) {
    return (
      <>
        <div className="absolute top-0 right-0">
          <div className="m-5 bg-nexus-bg-200 flex justify-center items-center rounded-full p-1 gap-5 pl-5">
            <p className="text-sm mr-2">
              {session ? session.user?.name : "user"}
            </p>
            <img
              src={session ? session.user?.image : ""}
              alt=""
              className="rounded-full size-8"
              width={32}
              height={32}
            />
          </div>
        </div>
      </>
    );
  }

  return <></>;
}
