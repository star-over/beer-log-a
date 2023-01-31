export function BeerErrorCard({ message }) {
  return (
    <div className="flex flex-col  gap-2 min-w-max bg-red-100 dark:bg-red-900/50 my-3 p-4 shadow rounded">
      <h4 className="text-2xl text-rose-600 dark:text-rose-700 font-bold">Error</h4>
      <p className="text-slate-600 max-w-lg">
        <span className="dark:text-zinc-400">An error has occurred with messages:&nbsp;</span>
        <span className="bg-red-200 rounded px-1">{message}</span>
      </p>
    </div>
  );
}
