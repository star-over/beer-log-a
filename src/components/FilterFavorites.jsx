/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFilters } from "../store/queryStateApi";

export function FilterFavorites() {
  const { getFilterFavorites, setFilterFavorites } = useFilters();

  return (
    <>
      <label
        className=""
        htmlFor="beerName"
      >Show favorites:
      </label>
      <input
        className=""
        type="checkbox"
        name="favorites"
        id="favorites"
        checked={getFilterFavorites()}
        onChange={(e) => setFilterFavorites(e.target.checked)}
      />
    </>
  );
}
