import { FilterAbv } from "./FilterAbv";
import { FilterFavorites } from "./FilterFavorites";
import { FilterInput } from "./FilterInput";
import { FilterSrm } from "./FilterSrm";

export function Filter() {
  return (
    <form>
      <FilterInput />
      <FilterFavorites />
      <FilterAbv />
      <FilterSrm />
    </form>
  );
}
