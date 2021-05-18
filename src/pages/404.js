import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Grid from "/src/components/Grid/Grid"
import Seo from "/src/components/SEO"

const Error404 = styled.section`
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
    grid-column: 2 / 3;
  }
`

const SubTitle = styled.h2`
  @media (min-width: 769px) {
    margin-top: 0;
  }
`

const error = () => {
  return (
    <>
      <Seo title="Error" />
      <Error404 className="section-padding">
        <Grid>
          <Title>404 Not Found</Title>
          <SubContent>
            <SubTitle>このページは削除されたか存在しないページです。</SubTitle>
            <p>
              
            </p>
            <Link className="btn" to="/">
              Homeに戻る
            </Link>
          </SubContent>
        </Grid>
      </Error404>
    </>
  )
}

export default error
