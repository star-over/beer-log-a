import { FilterAbv } from "./FilterAbv";
import { FilterFavorites } from "./FilterFavorites";
import { FilterInput } from "./FilterInput";
import { FilterReset } from "./FilterReset";
import { FilterSrm } from "./FilterSrm";
import { FilterTheme } from "./FilterTheme";

export function Filter() {
  return (
    <div className="flex flex-col sticky top-0 bg-zinc-100 shadow-md p-2">
      <div className="flex gap-2 justify-between items-center">
        <FilterTheme />
        <FilterReset />
        <FilterInput />
        <FilterFavorites />
      </div>
      <div className="flex flex-col">
        <FilterAbv />
        <FilterSrm />
      </div>
    </div>
  );
}
