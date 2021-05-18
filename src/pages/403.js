import React, {useEffect} from "react"
import styled from "styled-components"
import Grid from "../components/Grid/Grid"
import Seo from "../components/SEO"

const Error403 = styled.section`
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

const Error = () => {
  const redirect = () => {
    if( typeof window !== `undefined` ){
      window.location.href = process.env.GATSBY_403_REDIRECT_URL
    }
  }
  useEffect(
    redirect
  )
  return (
    <>
      <Seo title="Error" />
      <Error403 className="section-padding">
        <Grid>
          <Title>403 FORBIDDEN</Title>
          <SubContent>
            <SubTitle>アクセスが禁止されています。</SubTitle>
            <p>
              You're connecting blocked IP adress.<br/>
              Redirecting...
            </p>
          </SubContent>
        </Grid>
      </Error403>
    </>
  )
}

export default Error
