import { useFilters } from "../store/filterApi";
import { HeartButton } from "./HeartButton";

export function FilterFavorites() {
  const { getFilterFav, setFilterFav } = useFilters();
  return (
    <div className="flex h-12 w-12 flex-col justify-center">
      <HeartButton checked={getFilterFav()} onChange={(e) => setFilterFav(e.target.checked)} />
    </div>
  );
}
