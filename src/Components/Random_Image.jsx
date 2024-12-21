import { Api } from "@/Services/Axios";

async function fetchRandomImage() {
  try {
    const response = await Api.get("/api/randomitemshowcase");
    return response.data.imageUrl;
  } catch (error) {
    console.error("Error fetching the random image:", error);
    return "";
  }
}

export default async function Random_Image() {
  let imageSrc = await fetchRandomImage();

  return (
    <>
      <div className="relative w-[1133px] h-[892px] z-0">
        <img
          src="/images/showcase_items/shadow.png"
          alt=""
          width={1133}
          height={892}
          className="absolute top-0 left-0 select-none"
          draggable={false}
        />
        {imageSrc && (
          <img
            src={imageSrc}
            alt=""
            width={1133}
            height={892}
            className="absolute top-0 left-0 select-none animate-item_showcase drop-shadow-lg"
            draggable={false}
          />
        )}
      </div>
    </>
  );
}
