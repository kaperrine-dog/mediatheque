import React from "react"
import {Link} from "react-scroll"
import styled from "styled-components"
import Grid from "../Grid/Grid"
import SelfIntroduction from "../SelfIntroduction/SelfIntroduction.js"


const TitleArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 769px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
  //grid-column: 1 / 4;
  @media (min-width: 769px) {
    grid-column: 2 / 4;

    p {
      margin-top: 0;
    }
  }
`
const AboutSection = styled.section`
  background: var(--parallaxBG);
`

const About = ({ largePadding, id }) => {
  return (
    <AboutSection
      id={id}
      className={largePadding ? "section-padding--large" : "section-padding"}
    >
      <Grid>
        <TitleArea>
          <Title>
            
          </Title>
          <Link className="btn" to="works" smooth={true} duration={500}>
            View Works
          </Link>
        </TitleArea>
        <ContentArea>
          <SelfIntroduction/>
        </ContentArea>
      </Grid>
    </AboutSection>
  )
}

export default About
