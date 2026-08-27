import { createGlobalStyle } from "styled-components";
import Inter from "../assets/fonts/Inter-VariableFont_opsz,wght.ttf"
import ItalicInter from "../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url(${Inter}) format("truetype");
    font-weight: 100 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter";
    src: url(${ItalicInter}) format("truetype");
    font-weight: 100 900;
    font-style: italic;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.colors.bg};
    font-family: "Inter", sans-serif;
  }
`;

export default GlobalStyles;
