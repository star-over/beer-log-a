import { XCircleIcon } from "@heroicons/react/24/outline";
import { useFilters } from "../store/filterApi";

export function FilterReset() {
  const { resetFilter } = useFilters();

  return (
    <button
      className="group h-8 rounded-md border border-gray-400/90 px-2
      font-medium leading-none text-gray-400
      hover:bg-gray-50/50 hover:text-red-600 hover:shadow
      active:bg-gray-200/50 active:shadow
      dark:hover:bg-gray-500/50 dark:hover:text-red-300"
      type="button"
      onClick={resetFilter}
    >
      <div className="flex items-center gap-1">
        <XCircleIcon
          className="h-6 w-6 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-300"
        />
        <span>Reset</span>
      </div>
    </button>
  );
}
