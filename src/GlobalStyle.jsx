import { createGlobalStyle } from "styled-components";
import bg from "./assets/images/bg.jpg";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
 }

body {
    display: grid;
    font-family: 'Lato', sans-serif;
    background: url(${bg});
    background-size: 1880px 900px;
    background-repeat: no-repeat;
    background-position:;
   
}

ul {
    list-style: none;
}
`;
