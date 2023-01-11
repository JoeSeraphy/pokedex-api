import { Bottombar } from "./components/bottombar/Bottombar";
import { PokeList } from "./components/pokeList/PokeList";
import { Hearder } from "./components/hearder/Hearder";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hearder />
      <PokeList />
      <Bottombar />
    </>
  );
}

export default App;
