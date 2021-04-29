import {graphql, useStaticQuery} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const getImages = graphql`
  query HeroImage {
    fluid: file(relativePath: { eq: "deepsea01.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
`

const HeroContainer = styled.div``

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 100%;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-rows: 1fr 0fr;
    grid-gap: 40px;
  }
`

const HeroImage = styled.div`
  width: 100%;
  //height: fit-content;
  background-color: var(--primary);
  border: none;
  outline: none;
  grid-column: 1 / 4;
  @media (min-width: 769px) {
    grid-column: 1 / 3;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    margin-bottom: 0;
  }
`

const TitleArea = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: 769px) {
    grid-column: 1 / 4;
    display: initial;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 4;
    grid-row: 1 / 1;
    display: initial;
  }
`
const ContentArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 769px) {
    grid-column: 3 / 4;
  }

  @media (min-width: 1200px) {
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const HeroTitle = styled.h1`
  font-size: var(--heroH1);
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 0.025em;
  transform: rotate(270deg);
  position: absolute;
  bottom: 29vh;
  right: 0;
  @media (min-width: 769px){
    transform: rotate(0deg);
    position: static;
  }
`
const HeroTitleInverted = styled.div`
  transform: rotate(90deg);
  font-size: var(--heroH1);
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 0.025em;
  font-weight: 900;
  color: var(--background);
  -webkit-text-stroke: 1px var(--textColor);
  text-shadow:0px 0px 0.25rem var(--titleTextShadow), -0px -0px 0.25rem var(--titleTextShadow),
              -0px 0px 0.25rem var(--titleTextShadow), 0px -0px 0.25rem var(--titleTextShadow),
              0px 0px 0.25rem var(--titleTextShadow),  0 -0px 0.25rem var(--titleTextShadow),
              -0px 0 0.25rem var(--titleTextShadow), 0px 0 0.25rem var(--titleTextShadow);
  position: absolute;
  top: 25vh;
  left: 0;
  @media (min-width: 769px){
    transform: rotate( 180deg );
    position: static;
  }
`

const HeroSubTitle = styled.h2`
  font-size: var(--h2);
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const Banner = ({ title, info, children }) => {
  const data = useStaticQuery(getImages)

  const image = getImage(data.fluid.childImageSharp.gatsbyImageData)
  return (
    <section className="section-padding">
      <HeroContainer className="container">
        <GridContainer>
          <TitleArea>
            <HeroTitle>{title}</HeroTitle>
            <HeroTitleInverted role='headeing'>{title}</HeroTitleInverted>
          </TitleArea>
          <HeroImage>
            <GatsbyImage image={image} alt="hero image" />
          </HeroImage>
          <ContentArea>
            <HeroSubTitle>{info}</HeroSubTitle>
            {children}
          </ContentArea>
        </GridContainer>
      </HeroContainer>
    </section>
  )
}

export default Banner
