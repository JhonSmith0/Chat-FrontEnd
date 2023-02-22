import { createGlobalStyle } from "styled-components";
import { backgroundCl1, cl4 } from "./colors";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Rubik", sans-serif;
    background-color: ${backgroundCl1};
    color: #fff;
    
  }
  
  #root {
    width: 100vw;
    height: 100vh;

  }

  

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .icon {
    height: 2.4rem;
    width: 2.4rem;
    
    display: inline-block;

    &:hover {
      background: ${cl4};
    }

  }

`;
export default GlobalStyle;
