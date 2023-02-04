import { FilterAbv } from "./FilterAbv";
import { FilterFavorites } from "./FilterFavorites";
import { FilterInput } from "./FilterInput";
import { FilterReset } from "./FilterReset";
import { FilterSrm } from "./FilterSrm";
import { FilterTheme } from "./FilterTheme";

export function Filter() {
  return (
    <div className="sticky top-0 flex flex-col bg-zinc-100 p-2 shadow-md dark:bg-zinc-700">
      <div className="flex items-center justify-between gap-2">
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
