export function BeerErrorCard({ message }) {
  return (
    <div className="my-3 flex  min-w-max flex-col gap-2 rounded bg-red-100 p-4 shadow dark:bg-red-900/50">
      <h4 className="text-2xl font-bold text-rose-600 dark:text-rose-700">Error</h4>
      <p className="max-w-lg text-slate-600">
        <span className="dark:text-zinc-400">An error has occurred with messages:&nbsp;</span>
        <span className="rounded bg-red-200 px-1">{message}</span>
      </p>
    </div>
  );
}
