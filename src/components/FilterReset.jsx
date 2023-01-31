import { XCircleIcon } from "@heroicons/react/24/outline";
import { useFilters } from "../store/filterApi";

export function FilterReset() {
  const { resetFilter } = useFilters();

  return (
    <button
      className="px-2 h-8 font-medium leading-none border border-gray-400/90
      rounded-md text-gray-400 active:bg-gray-200/50 hover:bg-gray-50/50 dark:hover:bg-gray-500/50 hover:shadow active:shadow group dark:hover:text-red-300 hover:text-red-600"
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
