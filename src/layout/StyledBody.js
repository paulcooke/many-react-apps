import styled from 'styled-components'

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 40px;
  i {
    font-size: 48px;
  }
  h2, p {
    margin: 10px auto;
    text-align: center;
    line-height: 1.4em;
  } 
  &:before {
    content: '';
    position: absolute;
    width: 100vw;
    align-self: center;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
`