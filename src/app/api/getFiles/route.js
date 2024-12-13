import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const GET = () => {
  const jsonDirectory = path.join(process.cwd(), "public/jsons");

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

  return NextResponse.json({ filesAndFolders });
};
