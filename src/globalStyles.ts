import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: Verdana, sans-serif;
  }

  body {
    background-color: #e4e4e4;
    min-width: 425px;
  }
`;
