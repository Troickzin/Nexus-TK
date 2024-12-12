"use client";
import { Api } from "@/Services/Axios";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

async function uploadFiles(arquivo) {
  console.log("Arquivo: ", arquivo);

  Api.post("/api/test", {
    arquivo,
  })
    .then(function (res) {
      console.log("Vindo do Back: ", JSON.stringify(res.data));
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function ChooseFile(e, setInputTitle, inputTitle) {
  const fileUp = document.getElementById("fileUp");
  const uploadButton = document.getElementById("upload_button");

  const fileName = fileUp.value.substring(12);

  setInputTitle(fileName);
}

function UpForm(e, action) {
  const testForm = document.getElementById("testForm");

  testForm.dataset.open = action;
}

function HandleUpload(e, setInputTitle) {
  e.preventDefault();
}
export default function TestForm() {
  const [inputTitle, setInputTitle] = useState("");
  const testForm = document.querySelector("#testForm");

  return (
    <>
      <div className="absolute top-0 left-0 w-screen justify-center items-center grid">
        <button
          className="text-center bg-nexus-bg-200 p-2 pl-10 pr-10 rounded-b-2xl hover:scale-110 transition-all border-nexus-primary-color hover:border-[1px] hover:border-t-0"
          onClick={(e) => UpForm(e, "true")}
        >
          Open Upload File
        </button>
      </div>
      <div
        id="testForm"
        className="w-screen h-screen absolute top-0 left-0 grid justify-center items-center bg-nexus-bg-600/80 backdrop-blur-md data-[open=false]:hidden"
        data-open="false"
      >
        <div className="relative top-0 left-0 grid rounded-3xl bg-nexus-bg-400 shadow-black/25 shadow-lg p-5 justify-items-center">
          <button
            className="absolute top-0 right-0 text-nexus-txt-50 bg-nexus-bg-100 w-8 h-8 rounded-full m-2 hover:bg-red-500 transition-all"
            onClick={(e) => UpForm(e, "false")}
          >
            X
          </button>
          <h1 className="text-center text-2xl text-nexus-txt-50 mb-5">
            Test Form
          </h1>
          <label
            htmlFor="fileUp"
            className="btn pl-40 pr-40 bg-nexus-bg-200 hover:bg-nexus-primary-color hover:border-nexus-primary-color text-nexus-txt-50 border-none shadow-black/25 shadow-lg"
          >
            Choose File
          </label>
          <p className="mt-4 mb-40">{inputTitle}</p>
          <input
            type="file"
            name="file"
            id="fileUp"
            accept=".json,application/json"
            className="hidden"
            onChange={(e) => ChooseFile(e, setInputTitle, inputTitle)}
          />
          <button
            id="upload_button"
            className="btn btn-outline border-nexus-txt-50 text-nexus-txt-50 hover:bg-nexus-primary-color hover:border-nexus-primary-color pl-20 pr-20 ml-20 mr-20 shadow-black/50 shadow-lg"
            onClick={(e) => console.log("test")}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
}
