import { useFilters } from "../store/queryStateApi";

export function FilterReset() {
  const { resetFilter } = useFilters();

  return (
    <button
      className="py-1 text-sm font-medium leading-none border border-gray-400/90
      rounded-sm text-gray-600 active:bg-gray-200/50 hover:bg-gray-50/50 hover:shadow active:shadow"
      type="button"
      onClick={resetFilter}
    > Reset filter
    </button>
  );
}
