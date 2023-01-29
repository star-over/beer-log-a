import { useFilters } from "../store/queryStateApi";

export function FilterReset() {
  const { resetFilter } = useFilters();

  return (
    <button
      className="px-4 h-8 font-medium leading-none border border-gray-400/90
      rounded-md text-gray-600 active:bg-gray-200/50 hover:bg-gray-50/50 hover:shadow active:shadow"
      type="button"
      onClick={resetFilter}
    > Reset
    </button>
  );
}
