export function BeerNotfoundCard() {
  return (
    <div className="overflow-hidden min-w-max flex flex-col gap-2 bg-orange-100 my-3 p-4 shadow rounded">
      <h4 className="text-2xl text-orange-900 font-bold">Ups...</h4>
      <p className="max-w-lg">Sorry, no beer was found. Try to correct your query.</p>
    </div>
  );
}
