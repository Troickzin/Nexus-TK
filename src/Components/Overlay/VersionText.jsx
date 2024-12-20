import { Api } from "@/Services/Axios";

async function getNexusVersion() {
  try {
    const response = await Api.get("/api/randomitemshowcase");
    return response.data.version;
  } catch (error) {
    console.error("Error fetching the Nexus TK now version:", error);
    return "";
  }
}

export default function VersionText() {
  let version = getNexusVersion();
  return (
    <>
      <div className="fixed bottom-0 right-0 mr-3 mb-1 z-20">
        <p className="text-xs text-nexus-white-500">version {version}</p>
      </div>
    </>
  );
}
