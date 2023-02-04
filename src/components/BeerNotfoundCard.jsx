export function BeerNotfoundCard() {
  return (
    <div className="my-3 flex min-w-max flex-col gap-2 overflow-hidden rounded bg-orange-100 p-4 shadow
    dark:bg-orange-800/20"
    >
      <h4 className="text-2xl font-bold text-orange-900 dark:text-orange-600">Ups...</h4>
      <p className="max-w-lg dark:text-zinc-400">Sorry, no beer was found. Try to correct your query.</p>
    </div>
  );
}
