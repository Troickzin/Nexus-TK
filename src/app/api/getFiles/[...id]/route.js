import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// export const GET = (req, { params }) => {
//   const jsonDirectory = path.join(
//     `${process.cwd()}Uploads/jsons/${params.id[0]}/${params.id[1]}`
//   );

//   const jsonFilePath = path.join(jsonDirectory, "data.json");

//   if (fs.existsSync(jsonFilePath)) {
//     const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
//     const parsedData = JSON.parse(jsonData);
//     return NextResponse.json(parsedData);
//   } else {
//     return NextResponse.json({ error: "JSON file not found" }, { status: 404 });
//   }
// };
export function GET(req, { params }) {
  const jsonDirectory = path.join(
    `${process.cwd()}/Uploads/jsons`,
    ...params.id.slice(0, -1)
  );

  console.log(jsonDirectory);

  if (!Array.isArray(params.id) || params.id.length < 2) {
    return NextResponse.json(
      { error: "Parâmetro ID inválido" },
      { status: 400 }
    );
  }

  const jsonFilePath = path.join(
    jsonDirectory,
    params.id[params.id.length - 1] + ".json"
  );

  if (fs.existsSync(jsonFilePath)) {
    const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
    const parsedData = JSON.parse(jsonData);
    return NextResponse.json(parsedData);
  }
  return NextResponse.json(
    { error: "Arquivo JSON não encontrado" },
    { status: 404 }
  );
}
