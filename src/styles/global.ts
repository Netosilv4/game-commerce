import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background: ${props => props.theme.colors.paper};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    width: 100%;
    padding: 0 5vw;
  }
`
