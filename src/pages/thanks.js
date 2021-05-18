import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Grid from "/src/components/Grid/Grid"
import Network from "/src/components/Network/Network.js"
import Seo from "/src/components/SEO"

const Thanks = styled.section`
  background-color: var(--background);
  color: var(--text-color);

`

const Title = styled.h1`
  margin-top: 0;

  @media (min-width: 769px) {
    grid-column: 1 / 2;
  }
`

const SubContent = styled.div`

  p {
    margin-bottom: 2.125rem;
  }
  @media (min-width: 769px) {
    grid-column: 2 / 4;
  }
`

const SubTitle = styled.h2`
  @media (min-width: 769px) {
    margin-top: 0;
  }
`
const NetWorkRight = styled.div`
  width: 100%;
  height: 100%;
  //display: none;
  @media (min-width: 769px) {
    display: initial;
    grid-column: 3 / 4;

  }
`
const NetWorkCenter = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 769px) {
    display: initial;
    grid-column: 2 / 3;
  }
`
const NetWorkLeft = styled.div`
  width: 100%;
  height: 100%;
  //display: none;
  @media (min-width: 769px) {
    display: initial;
    grid-column: 1 / 2;
  }
`

const thanks= () => {
  return (
    <>
      <Seo title="Thanks!" />
      <Thanks className="section-padding">
        <Grid>
          <Title>Thanks</Title>
          <SubContent>
            <SubTitle>お問い合わせありがとうございます。</SubTitle>
            <p>
            </p>
          </SubContent>
          <NetWorkLeft>
            <Network
              id = "canvasLeft"
              randomRangeMin = {-10}
              randomRangeMax = {24}
            />
          </NetWorkLeft>
          <NetWorkCenter>
             <Network
              id = "canvasCenter"
              randomRangeMin = {-40}
              randomRangeMax = {14}
            /> 
          </NetWorkCenter>
          <NetWorkRight>
            <Network
              id = "canvasRight"
              randomRangeMin = {-10}
              randomRangeMax = {10}
            />
          </NetWorkRight>
          <SubContent>
            <Link className="btn" to="/">
              Homeに戻る
            </Link>
          </SubContent>
        </Grid>
      </Thanks>
    </>
  )
}

export default thanks
