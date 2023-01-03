import { useState } from "react";
import pokeball from "../../assets/images/pokeballColor.png";
import {
  Container,
  DivRight,
  PokeTitle,
  Show,
  ShowImg,
  StatContainer,
  StatsLeft,
  StatsRight,
  Line,
} from "./style";
import { Modal } from "../modal/modal";

export function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
  const [isShow, setIsShow] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Container>
        {isShow && (
          <Show>
            <StatContainer>
              <p style={{ width: "180px", color: "white" }}>No. {id}</p>
              <p>{name}</p>
              <PokeTitle
                src={pokeball}
                alt="pokebola"
                style={{ marginLeft: "auto", width: "40px" }}
              />
            </StatContainer>
            <ShowImg src={image} alt={name} />

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
          </Show>
        )}
        <DivRight
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
          onClick={modalHandler}
        >
          <img
            src={image}
            alt={name}
            style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
          />
          <p style={{ width: "270px" }}>No. {id}</p>
          <p>{name}</p>
          <img
            src={pokeball}
            alt="pokeball"
            style={{ marginLeft: "auto", width: "40px" }}
          />
        </DivRight>
        {modalOpen && (
          <Modal
            id={id}
            name={name}
            image={image}
            height={height}
            weight={weight}
            stats={stats}
            statsName={statsName}
            type={type}
            onClick={closeModalHandler}
          />
        )}
      </Container>
    </>
  );
}
