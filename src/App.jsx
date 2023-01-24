import { useBeer, useBeers } from "./store/beerApi";

function App() {
  const beers = useBeers();
  const beer2 = useBeer(6);

  if (beers.isLoading) return "Loading...";
  if (beers.error) return `An error has occurred: ${beers.error.message}`;

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-zinc-700">
        Hello world!
      </h1>
      <div>{beers.isFetching ? "Updating..." : ""}</div>
      <ul>
        {beers?.data?.map((beer) => (
          <li className="pl-6" key={beer.id}>{beer.name}</li>
        ))}
      </ul>
      <div className="pl-6 pt-4 text-orange-600">
        <div>{beer2.isFetching ? "Updating..." : ""}</div>
        {beer2?.data && beer2?.data[0]?.tagline}
      </div>
    </div>

  );
}

export default App;
