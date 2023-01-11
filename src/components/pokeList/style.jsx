import styled from "styled-components";

export const Card = styled.div`
  margin-top: 16px;
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto auto auto;
  gap: 32px;
  background: linear-gradient(115deg, #fff1ff 48%), #f3533b 48% 55%, #fb7248 55%;
`;

export const Container = styled.div`
  max-widht: 1441px;
  width: 100%;
  height: 70.5vh;
  position: absolute;
  top: 230px;
  overflow-y: scroll;
`;
