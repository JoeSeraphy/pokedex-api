import { GlobalStyle } from "../../GlobalStyle";

import pokeballBlack from "../../assets/images/pokeballBlack.png";
import pokeballColor from "../../assets/images/pokeballColor.png";
import { Container, Title, Circle, RedContainer } from "./style";

export function Topbar() {
  return (
    <>
      <RedContainer></RedContainer>
      <Container>
        <Circle></Circle>
        <Title>Pokédex</Title>
      </Container>
    </>
  );
}
