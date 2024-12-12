import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function POST(req) {
  const Formdata = await req.formData();
  const name = Formdata.get("name");
  const file = Formdata.get("file");
  const description = Formdata.get("description");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const folderPath = path.join(
    process.cwd(),
    "public",
    "jsons",
    "Uploads",
    file.name
  );

  fs.mkdirSync(folderPath, {
    recursive: true,
  });

  const pathfile = path.join(folderPath, `${file.name}.json`);

  const cw = process.cwd();

  console.log(file.name);
  fs.writeFileSync(pathfile, buffer);
  console.log(`open ${pathfile} to see the uploaded file`);

  return NextResponse.json({ name });
}
