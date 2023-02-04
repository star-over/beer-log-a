export default function Header() {
  return (
    <>
      <h1 className="sr-only">Punk My Beer</h1>
      <div className=" flex justify-between gap-4 bg-zinc-100 px-2 py-4 shadow-md dark:bg-zinc-700">
        <div className="grow bg-gradient-to-r from-amber-400 to-orange-900 bg-clip-text p-4 text-right
          text-8xl font-extrabold text-transparent"
        >
          <p className="leading-[0.55]">Punk</p>
          <p className="leading-[0.5]">my</p>
          <p className="leading-[.6]">beer&nbsp;&nbsp;</p>
        </div>
      </div>
    </>
  );
}
