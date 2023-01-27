/* eslint-disable jsx-a11y/label-has-associated-control */
import { FilterFavorites } from "./FilterFavorites";
import { FilterInput } from "./FilterInput";

export function Filter() {
  return (
    <form>
      <FilterInput />
      <FilterFavorites />
    </form>
  );
}
