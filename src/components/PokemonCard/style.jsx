import styled from "styled-components";

export const Container = styled.div`
  position: realtive;
  display: flex;
  justify-content: space-around;
  widht: 100%;
`;

export const DivCenter = styled.div`
  background: #e84444;
  border-radius: 10px;
  transition: 0.35s ease-in-out;
  &:hover {
    cursor: pointer;
    color: white;
    scale: 1.05;
  }
`;

export const PokeName = styled.div`
  width: 300px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  padding: 0 4px;
  display: flex;
  gap: 0 14px;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(132deg, #ff380c 40%, #272726 40%);
`;

export const Circle = styled.div`
  background: #fff;
  margin: 8px auto;
  display: flex;
  justify-content: center;
  width: 150px;
  border-radius: 100%;
`;

export const PokeImg = styled.img`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  width: 100px;
  filter: drop-shadow(2px 4px 12px black);
`;

export const Show = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  border-radius: 5px;
  left: 10%;
  top: 20%;
  z-index: 2;
  background: #fff;
`;

export const ShowImg = styled.img`
  filter: drop-shadow(2px 4px 12px black);
  max-width: 300px;
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

export const ImgTitle = styled.div`
  width: 45px;
  min-height: 60px;
  margin-right: 10px;
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
  aling-items: center;
`;
