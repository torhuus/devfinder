import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.bodyBg};
    color: ${({theme}) => theme.lighterText};
    font-family: 'Space Mono', monospace;
    transition: all .3s linear;
  }
  h1,h2,h3,h4,h5,h6 {
    color: ${({theme}) => theme.mainText};
  }

`;
