import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const formData = await req.formData();

  const file = formData.get("file");
  const name = formData.get("name");
  const packname = formData.get("packname");
  const description = formData.get("description");
  const owner = formData.get("owner");

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

  const filePath = path.join(folderPath, name + ".json");

  fs.writeFileSync(filePath, buffer);
  console.log(`open ${filePath} to see the uploaded file`);

  saveJsonFile(req, filePath, name, ownerName, packname, description);

  return NextResponse.json(
    {
      message: "Arquivo enviado com sucesso!",
    },
    { status: 201 }
  );
}

function saveJsonFile(req, filePath, name, owner, packname, description) {
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
