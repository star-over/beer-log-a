export default function Header() {
  return (
    <>
      <h1 className="sr-only">Punk My Beer</h1>
      <div className=" px-2 py-4 bg-zinc-100 shadow-md flex justify-between gap-4">
        <div className="p-4 text-right flex-grow text-8xl leading-[0.7] font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-amber-400 to-orange-900"
        >
          <p>Punk</p>
          <p>my</p>
          <p>beer</p>
        </div>
      </div>
    </>
  );
}
