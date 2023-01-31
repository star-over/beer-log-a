import { useFilters } from "../store/queryStateApi";
import { HeartButton } from "./HeartButton";

export function FilterFavorites() {
  const { getFilterFav, setFilterFav } = useFilters();
  return (
    <div className="w-12 h-12 flex flex-col justify-center">
      <HeartButton checked={getFilterFav()} onChange={(e) => setFilterFav(e.target.checked)} />
    </div>
  );
}
