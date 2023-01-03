import styled from "styled-components";
import bg from "../../assets/images/bgpokemon.png";

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  padding: 0 300px;
  align-items: center;
  background-image: url(${bg});
  bakcground-size: cover;
  background-repeat: no-repeat;

  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Close = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  border-radius: 50%;
  padding: 5px 10px;
  background: black;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

export const PokeImg = styled.img`
  filter: drop-shadow(2px 4px 12px black);
`;

export const Flex = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  height: 500px;
  gap: 16px;
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-left; -5%;
  padding: 0 10px;
  width: 100%;
  height: 70px;
  border-radius: 5px;
  background: linear-gradient(132deg, #ee1515 40%, #272726 40%);
`;

export const PokeTitle = styled.img`
  width: 40px;
  margin-left: auto;
`;

export const StatsLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  font-size: 20px;
  color: white;
  background: #272726;
`;
export const StatsRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  font-size: 20px;
  color: white;
  background: #272726;
`;
export const Line = styled.div`
  border-bottom: 1px solid white;
  padding: 8px;
`;

export const StatsBase = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  font-size: 20px;
  color: white;
  background: #ee1515;
`;
