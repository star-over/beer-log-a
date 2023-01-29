import { Filter } from "./Filter";

export default function Header() {
  return (
    <div className=" px-2 bg-zinc-100 shadow-md ">
      <div className="text-center">
        <h1 className="text-6xl leading-relaxed font-extrabold text-transparent bg-clip-text
        bg-gradient-to-r from-amber-400 to-orange-900"
        >
          Punk my beer
        </h1>
        <Filter />
      </div>
    </div>
  );
}
