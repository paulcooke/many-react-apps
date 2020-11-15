import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Varela Round', sans-serif;
    min-width: 320px;
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    color: #26557c;
    box-sizing: border-box;
  }
`

export default GlobalStyle