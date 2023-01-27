import { useFilters } from "../store/queryStateApi";

export function Filter() {
  const { getfilterName, setFilterName } = useFilters();
  console.log("🚀 > Filter > getfilterName", getfilterName());

  return (
    <form>
      <input
        type="text"
        value={getfilterName()}
        onChange={(e) => setFilterName(e.target.value)}
      />
    </form>
  );
}
