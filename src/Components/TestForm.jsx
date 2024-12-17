"use client";

// Importações necessárias
import { Api } from "@/Services/Axios";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

// Função assíncrona para fazer upload dos arquivos
async function uploadFiles(arquivo) {
  let formData = new FormData();

  // Obtém a sessão do usuário
  const session = await getSession();

  // Adiciona os dados do formulário ao FormData
  formData.append("file", arquivo.fileup.files[0]);
  formData.append("name", arquivo.namefile.value);
  formData.append("packname", arquivo.packnamefile.value);
  formData.append("description", arquivo.descriptionfile.value);
  formData.append("owner", JSON.stringify(session.user));

  // Faz a requisição POST para enviar os dados
  Api.post("/api/test", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then(function (res) {
      console.log(res);
    })
    .catch((error) => {
      console.log(`Erro: ${error.status} : ${error}`);
    });
}

// Função para lidar com o evento de upload
function HandleUpload(e) {
  const fileUp = document.getElementById("fileUp");
  e.preventDefault();
  uploadFiles(fileUp.files[0]);
}

// Função assíncrona para obter o nome do usuário
async function setname() {
  const session = await getSession();
  return session.user.name;
}

// Componente principal do formulário de teste
export default function TestForm() {
  // Estados para armazenar os valores dos campos
  const [fileTitle, setFileTitle] = useState("File Name");
  const [userName, setUserName] = useState("username");
  const [fileName, setFileName] = useState("File");
  const [packFileName, setPackFileName] = useState("PackName");

  // useEffect para definir o nome do usuário ao carregar o componente
  useEffect(() => {
    setname().then((res) => {
      setUserName(res);
    });
  }, []);

  // URL para exibir o caminho do arquivo
  const ur = `${window.location.protocol}//${window.location.host}/Jsons/Uploads/${userName}`;

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    uploadFiles(e.target.elements);
  };

  // Função para escolher o arquivo e definir o título
  function ChooseFile(e, file) {
    const fileName = file.name;
    setFileTitle(fileName);
  }

  // Função para definir o nome do arquivo
  function ChooseFileName(e, name) {
    setFileName(name);
  }

  // Função para definir o nome do pacote do arquivo
  function ChoosePackFileName(e, name) {
    setPackFileName(name);
  }

  return (
    <>
      <div className="grid h-screen items-center justify-center absolute top-0 left-0 ml-20">
        <form
          onSubmit={handleSubmit}
          className="bg-nexus-bg-300 text-nexus-txt-100 font-normal"
        >
          <div>
            <p className="text-nexus-txt-50 text-xl">Upload File</p>
            <a className="text-xs text-nexus-txt-300">{`${ur}/${packFileName}/${fileName}.json`}</a>
          </div>
          <div>
            <div>
              <p>Choose File</p>
              <label htmlFor="fileup" id="fileupbutton">
                {fileTitle}
              </label>
              <input
                type="file"
                name="fileup"
                id="fileup"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  ChooseFile(e, e.target.files[0]);
                }}
              />
            </div>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="namefile"
                id="namefile"
                onChange={(e) => {
                  ChooseFileName(e, e.target.value);
                }}
              />
            </div>
            <div>
              <p>Pack Name</p>
              <input
                type="text"
                name="packnamefile"
                id="packnamefile"
                onChange={(e) => {
                  ChoosePackFileName(e, e.target.value);
                }}
              />
            </div>
            <div>
              <p>Description</p>
              <textarea name="descriptionfile" id="descriptionfile"></textarea>
            </div>
            <div>
              <input type="submit" value="Upload" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
