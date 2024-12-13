"use client";
import { Api } from "@/services/Axios";
import { useEffect, useState } from "react";

async function fetchFiles() {
  return await Api.get("/api/getFiles")
    .then(function (res) {
      return res.data.filesAndFolders;
    })
    .catch((error) => {
      console.log(`Erro: ${error.status} : ${error}`);
      return [];
    });
}

export default function FilesRouter() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles().then((res) => {
      setFiles(res);
    });
  }, []);

  console.log(files);
  const renderFiles = (items) => {
    return (
      <ul className="ml-4 mt-2 text-nexus-txt-100">
        {items.map((item, index) => (
          <li
            key={item.name}
            className={`${
              item.name.endsWith(".json") && index !== items.length - 1
                ? "border-b-[1px] border-nexus-txt-400"
                : ""
            } mb-1 pb-1`}
          >
            {item.children.length === 0 ? (
              <a
                className={`${
                  item.name.endsWith(".json") ? "text-nexus-primary-color" : ""
                }`}
                href={item.path}
              >
                {item.name}
              </a>
            ) : (
              <>
                <p>{item.name}</p>
                {renderFiles(item.children)}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="absolute max-xl:bottom-0 xl:top-0 xl:right-0 w-screen xl:w-auto xl:h-screen flex xl:grid items-center justify-center">
        <div className="overflow-x-auto snap-x gap-16 flex xl:grid xl:gap-5 pr-20 max-xl:mt-20 max-xl:mb-5 xl:ml-20 xl:mr-5 max-xl:pt-4 max-xl:pl-8 max-xl:pr-8 xl:pl-4 xl:pt-8 xl:pb-8 max-xl:border-t-2 xl:border-l-2 border-nexus-txt-400 max-h-[80vh] overflow-y-auto">
          {files.map((category) => (
            <div key={category.name} className="snap-start">
              <p className="text-nexus-txt-50">{category.name}</p>
              {renderFiles(category.children)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* <div className="absolute max-xl:bottom-0 xl:top-0 xl:right-0 w-screen xl:w-auto xl:h-screen flex xl:grid items-center justify-center">
        <div className="overflow-x-auto snap-x gap-16 flex xl:grid xl:gap-5 max-xl:mt-20 max-xl:mb-5 xl:ml-20 xl:mr-20 max-xl:pt-4 max-xl:pl-8 max-xl:pr-8 xl:pl-4 xl:pt-8 xl:pb-8 max-xl:border-t-2 xl:border-l-2 border-nexus-txt-400">
          {files.map((category) => (
            <div key={category.name} className="snap-start">
              <p className="text-nexus-txt-50">{category.name}</p>
              <ul className="ml-4 mt-2 text-nexus-txt-100">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <p>{item.name}</p>
                    <ul className="ml-4 mt-2 text-nexus-primary-color">
                      {item.files.map((file) => (
                        <li key={file.name}>
                          <a href={file.url}>{file.name}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */
