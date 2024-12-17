import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { url } from "inspector";
import { NextURL } from "next/dist/server/web/next-url";
export async function POST(req) {
  const Formdata = await req.formData();

  const file = Formdata.get("file");
  const name = Formdata.get("name");
  const packname = Formdata.get("packname");
  const description = Formdata.get("description"); // um dia utilizo isso
  const owner = Formdata.get("owner");

  if (!file || !file.name) {
    return NextResponse.json({ error: "Arquivo não enviado" }, { status: 400 });
  } else if (!name) {
    return NextResponse.json({ error: "Nome não enviado" }, { status: 400 });
  } else if (!packname) {
    return NextResponse.json(
      { error: "Packname não enviado" },
      { status: 400 }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ownerName = JSON.parse(owner).name;

  const folderPath = path.join(
    process.cwd(),
    "Uploads",
    "jsons",
    ownerName,
    packname
  );

  fs.mkdirSync(folderPath, {
    recursive: true,
  });

  const pathfile = path.join(folderPath, name + ".json");

  fs.writeFileSync(pathfile, buffer);
  console.log(`open ${pathfile} to see the uploaded file`);

  const pathfilesave = path.join(
    process.cwd(),
    "Uploads",
    "jsons",
    "Save.json"
  );

  saveJsonFile(req, pathfile, name, ownerName, packname, description);

  return NextResponse.json(
    {
      message: "Arquivo enviado com sucesso!",
    },
    { status: 201 }
  );
}

function saveJsonFile(req, pathfile, name, owner, packname, description) {
  const savePath = path.join(process.cwd(), "Uploads", "jsons", "Save.json");

  let data = [];

  // Verifica se o arquivo já existe
  if (fs.existsSync(savePath)) {
    // Lê o conteúdo atual do arquivo
    const existingData = fs.readFileSync(savePath, "utf8");
    data = JSON.parse(existingData);
  }

  const fileUrl = `${req.nextUrl.origin}/jsons/${owner}/${packname}/${name}.json`;
  // Adiciona os novos dados ao array
  data.push({
    fileUrl: fileUrl,
    name: name,
    owner: owner,
    description: description,
  });

  // Converte o array de dados para JSON
  const json = JSON.stringify(data, null, 2);

  // Escreve o JSON no arquivo
  fs.writeFileSync(savePath, json);
}
