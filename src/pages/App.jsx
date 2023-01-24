import { ContainerLayout } from "../components/ContainerLayout";
import Header from "../components/Header";
import { useBeer, useBeers, useInfiniteBeers } from "../store/beerApi";

function App() {
  const beers = useInfiniteBeers();
  // const beer2 = useBeer(6);
  console.log("🚀 > App > beers", beers);

  if (beers.isLoading) return "Loading...";
  if (beers.error) return `An error has occurred: ${beers.error.message}`;

  return (
    <>
      <Header />
      <ContainerLayout>
        <div className="bg-red-100">
          <div>{beers.isFetching ? "Updating..." : ""}</div>
          <ul className="space-y-3">
            {beers?.data?.pages?.flat().map(((beer) => (
              <li
                className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6"
                key={beer.id}
              >
                {beer.name}

              </li>
            )))}
          </ul>
          <button type="button" className="px-10 py-3 ml-6 bg-slate-300 text-slate-800 border border-slate-900 rounded-lg" onClick={() => beers.fetchNextPage()}>
            more
          </button>
          {/* <div className="pl-6 pt-4 text-orange-600">
      <div>{beer2.isFetching ? "Updating..." : ""}</div>
      {beer2?.data && beer2?.data[0]?.tagline}
    </div> */}
        </div>
      </ContainerLayout>
    </>

  );
}

export default App;
