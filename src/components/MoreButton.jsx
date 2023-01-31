import { CloudArrowDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from "react";

export function MoreButton({ handleMore, isFetchingNextPage, hasNextPage }) {
  const target = useRef(null);

  const loadMode = (entries) => {
    const [{ isIntersecting }] = entries;
    if (isIntersecting && hasNextPage) handleMore();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(loadMode);
    if (target.current) observer.observe(target.current);

    return () => { if (target.current) observer.observe(target.current); };
  }, [target]);

  if (!hasNextPage) return null;
  const status = isFetchingNextPage ? "Loading..." : "Load more";
  return (
    <div className="relative" ref={target}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 dark:border-gray-800" />
      </div>
      <div className="relative flex justify-center">
        <button
          disabled={isFetchingNextPage}
          className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium leading-5
          disabled:bg-slate-100 disabled:text-slate-700 dark:disabled:bg-zinc-400
          text-white dark:text-zinc-300 hover:shadow-sm bg-blue-600 hover:bg-blue-500"
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
