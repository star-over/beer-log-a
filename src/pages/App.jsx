import { BeerList } from "../components/BeerList";
import { ContainerLayout } from "../components/ContainerLayout";
import { GlobalUpdateNotification } from "../components/GlobalUpdateNotification";
import Header from "../components/Header";

function App() {
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
