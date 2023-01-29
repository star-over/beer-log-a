import { FilterAbv } from "./FilterAbv";
import { FilterFavorites } from "./FilterFavorites";
import { FilterInput } from "./FilterInput";
import { FilterReset } from "./FilterReset";
import { FilterSrm } from "./FilterSrm";

export function Filter() {
  return (
    <form className="">
      <fieldset className="flex gap-2 justify-between">

        <FilterReset />
        <FilterInput />
        <FilterFavorites />
      </fieldset>
      <fieldset className="flex h-10 mt-2">
        <FilterAbv />
        <FilterSrm />
      </fieldset>
    </form>
  );
}
