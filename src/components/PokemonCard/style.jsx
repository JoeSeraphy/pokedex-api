import styled from "styled-components";

export const Container = styled.div`
  position: realtive;
  display: flex;
  justify-content: end;
  margin-right: 20px;
`;

export const DivRight = styled.div`
  display: flex;
  align-items: center;
  width: 38%;
  height: 55px;
  margin: 10px 0;
  padding: 5px 20px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 50px;
  transition: 0.5 ease-in-out;

  &:hover {
    background: linear-gradient(132deg, #ff380c 40%, #272726 40%);
    cursor: pointer;
    color: white;
  }
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
