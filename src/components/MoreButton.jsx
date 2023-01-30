import { CloudArrowDownIcon } from "@heroicons/react/20/solid";

export function MoreButton({ handleMore, isFetchingNextPage, hasNextPage }) {
  if (!hasNextPage) return null;
  const status = isFetchingNextPage ? "Loading..." : "Load more";
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <button
          disabled={isFetchingNextPage}
          className="inline-flex items-center rounded-full border disabled:bg-slate-100 disabled:text-slate-700 bg-blue-600 px-4 py-1.5 text-sm font-medium leading-5 text-white hover:shadow-sm hover:bg-blue-500"
          type="button"
          onClick={handleMore}
        >
          {isFetchingNextPage || <CloudArrowDownIcon className="-ml-1.5 mr-3 h-5 w-5 text-white" aria-hidden="true" />}
          <span>{status}</span>
        </button>
      </div>
    </div>
  );
}
