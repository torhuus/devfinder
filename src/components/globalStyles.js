import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {padding: 0; margin: 0; box-sizing: border-box;}
  
  body {
    background: ${({theme}) => theme.bodyBg};
    color: ${({theme}) => theme.lighterText};
    font-family: 'Space Mono', monospace;
    transition: all .3s linear;
  }
  
  button {
    font-family: 'Space Mono', monospace;
    background:none;
    border: none;
    color: ${({theme}) => theme.mainText}
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${({theme}) => theme.mainText};
  }

`;
