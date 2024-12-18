export default function Background() {
  return (
    <>
      <div className="w-full h-full overflow-hidden z-[0] absolute top-0 left-0 bg-nexus-bg-500">
        <div
          className="w-full h-full opacity-[0.02]"
          style={{
            backgroundImage: "url('/images/grid_effect.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
}
