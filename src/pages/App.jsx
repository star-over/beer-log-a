import { BeerList } from "../components/BeerList";
import { ContainerLayout } from "../components/ContainerLayout";
import { GlobalUpdateNotification } from "../components/GlobalUpdateNotification";
import Header from "../components/Header";
import { useInfiniteBeers } from "../store/beerApi";

function App() {
  const beers = useInfiniteBeers();
  // console.log("🚀 > App > beers", beers);

  if (beers.isLoading) return "Loading...";
  if (beers.error) return `An error has occurred: ${beers.error.message}`;

  return (
    <>
      <Header />
      <ContainerLayout>
        <BeerList />
        <GlobalUpdateNotification />
      </ContainerLayout>
    </>

  );
}

export default App;
