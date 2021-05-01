import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-gap: 40px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: content-box;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px){
    grid-gap: 60px;
  }
`

const Grid = ({ children }) => {
  return <Container>{children}</Container>
}

export default Grid
