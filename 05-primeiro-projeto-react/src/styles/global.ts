import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #F2F2FA url(${githubBackground}) no-repeat 70% top;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
