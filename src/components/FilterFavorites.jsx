/* eslint-disable jsx-a11y/label-has-associated-control */
import { HeartIcon as IconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as IconOutLine } from "@heroicons/react/24/outline";
import { useFilters } from "../store/queryStateApi";

export function FilterFavorites() {
  const { getFilterFav, setFilterFav } = useFilters();
  return (
    <>
      <input
        className="h-8 w-8 sr-only"
        type="checkbox"
        name="favorites"
        id="favorites"
        checked={getFilterFav()}
        onChange={(e) => setFilterFav(e.target.checked)}
      />
      <label
        className=""
        htmlFor="checkbox"
      >
        {getFilterFav()
          ? (
            <IconSolid
              className="h-8 w-8 text-red-400 hover:text-red-500"
              onClick={() => setFilterFav(false)}
            />
          )
          : (
            <IconOutLine
              className="h-8 w-8  text-gray-400 hover:text-gray-500"
              onClick={() => setFilterFav(true)}
            />
          )}
      </label>
    </>
  );
}
