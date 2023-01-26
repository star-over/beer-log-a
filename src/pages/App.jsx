import { BeerList } from "../components/BeerList";
import { ContainerLayout } from "../components/ContainerLayout";
import { GlobalUpdateNotification } from "../components/GlobalUpdateNotification";
import Header from "../components/Header";
import { useInfiniteBeers } from "../store/beerApi";

function App() {
  const beers = useInfiniteBeers();

  if (beers.isLoading) return "Loading...";
  if (beers.error) return `An error has occurred: ${beers.error.message}`;

  return (
    <>
      <GlobalUpdateNotification />
      <Header />
      <ContainerLayout>
        <BeerList />
      </ContainerLayout>
    </>

  );
}

export default App;
