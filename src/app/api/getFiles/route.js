import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import fs from "fs";
import path from "path";

export const GET = async (req) => {
  const jsonDirectory = path.join(process.cwd(), "public/jsons");
  const session = await getServerSession();

  const getFilesAndFolders = (directory) => {
    return fs.readdirSync(directory).map((file) => {
      const fullPath = path.join(directory, file);
      const isDirectory = fs.lstatSync(fullPath).isDirectory();

      return {
        name: file,
        path: fullPath
          .replace(path.join(process.cwd(), "public"), "")
          .replace(/\\/g, "/"),
        isDirectory,
        children: isDirectory ? getFilesAndFolders(fullPath) : [],
      };
    });
  };

  const filesAndFolders = getFilesAndFolders(jsonDirectory);

  if (session) {
    return NextResponse.json({ filesAndFolders });
  } else {
    return NextResponse.json({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
