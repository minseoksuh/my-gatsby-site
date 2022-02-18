import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
#___gatsby,
#gatsby-focus-wrapper {
  height: 100%;
  box-sizing: border-box;
  font-family: museo-sans, Helvetica, Arial, sans-serif;
font-size: 16px;
background: #f7f7f7;
}

  *, *:before, *:after {
    box-sizing: inherit;
  }


`;

export default GlobalStyle;
