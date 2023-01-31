export default function Header() {
  return (
    <>
      <h1 className="sr-only">Punk My Beer</h1>
      <div className=" px-2 py-4 bg-zinc-100 shadow-md flex justify-between gap-4">
        <div className="p-4 text-right flex-grow text-8xl font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-amber-400 to-orange-900"
        >
          <p className="leading-[0.55]">Punk</p>
          <p className="leading-[0.5]">my</p>
          <p className="leading-[.6]">beer&nbsp;&nbsp;</p>
        </div>
      </div>
    </>
  );
}
