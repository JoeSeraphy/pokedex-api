import { Bottombar } from "./components/bottombar/Bottombar";
import { PokeList } from "./components/pokeList/PokeList";
import { Topbar } from "./components/topbar/topbar";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Topbar />
      <PokeList />
      <Bottombar />
    </>
  );
}

export default App;
