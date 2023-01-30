import { BeerList } from "../components/BeerList";
import { ContainerLayout } from "../components/ContainerLayout";
import { Filter } from "../components/Filter";
import { GlobalUpdateNotification } from "../components/GlobalUpdateNotification";
import Header from "../components/Header";

function App() {
  return (
    <>
      <GlobalUpdateNotification />
      <ContainerLayout>
        <Header />
        <Filter />
        <BeerList />
      </ContainerLayout>
    </>
  );
}

export default App;
