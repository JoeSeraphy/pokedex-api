import pokeball from "../../assets/images/pokeballColor.png";
import {
  Close,
  Container,
  Flex,
  PokeImg,
  StatContainer,
  PokeTitle,
  Line,
  StatsLeft,
  StatsRight,
  StatsBase,
} from "./style";

export function Modal({
  onClick,
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  return (
    <>
      <Container>
        <Close onClick={onClick}>X</Close>
        <div>
          <PokeImg src={image} alt={name} />
        </div>
        <Flex>
          <StatContainer>
            <p style={{ width: "180px", color: "white" }}>No. {id}</p>
            <p>{name}</p>
            <PokeTitle
              src={pokeball}
              alt="pokebola"
              style={{ marginLeft: "auto", width: "40px" }}
            />
          </StatContainer>
          <div style={{ display: "flex", width: "100%" }}>
            <StatsLeft>
              <Line>Tipo</Line>
              <Line>Altura</Line>
              <Line>Peso</Line>
            </StatsLeft>
            <StatsRight>
              <Line>{type}</Line>
              <Line>{height}0 cm</Line>
              <Line>{weight} lbs</Line>
            </StatsRight>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <StatsBase>
              {statsName.map((stats) => (
                <Line>{stats}</Line>
              ))}
            </StatsBase>
            <StatsBase>
              {stats.map((stats) => (
                <Line>{stats}</Line>
              ))}
            </StatsBase>
          </div>
        </Flex>
      </Container>
    </>
  );
}
