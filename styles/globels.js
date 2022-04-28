import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.2rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.main};
    cursor: default;
  }
  h2 {
    color: ${(props) => props.theme.colors.header};
    font-family:${(props) => props.theme.fonts.title};
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;
