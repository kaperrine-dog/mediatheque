import {GatsbyImage, getImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledWorkItem = styled.article`
  width: 100%;
  padding: 0 20px;
  position: relative;
  min-width: 325px; 
  max-width: 500px;
  border-radius: var(--blogCardBorderRadius);
  background: var(--background);
  background: var(--blogPanelBGDark);
  box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);
  
  @media (min-width: 769px){
    margin: auto;
    max-width: 350px;
  }
  @media (min-width: 992px){
    max-width: 400px;
  }
  @media (min-width: 1200px){
    padding: 20px 20px;
  }
  @media (min-width: 1400px){
    padding: 40px 20px;
  }
  .workImage{
    width: 100%;
    height: 250px;
    border-radius: var(--blogCardBorderRadius);
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 90%;
    height: 90%;
    background-color: var(--blogCardShadowDark);
    filter: blur(20px);
    transform: translateY(10px) scale(1);
    mix-blend-mode: multiply;
  }
`

const StyledWorkContent = styled.div`
  //background: var(--worksPanelBG);
  //border-top: 3px solid var(--primary);
  padding: 2.5rem 1.25rem;
  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
    max-width: calc((100vw - 60px - 40px) / 2);
  }
  @media (min-width: 1000px) {
    max-width: calc((100vw - 60px - 80px) / 3);
  }

  h2 {
    margin-top: 0;
    display: inline-block;
  }

  p {
    margin-bottom: 0;
  }
`

const Work = ({ work }) => {
  const { name, slug, images, introduction } = work

  const image = getImage(images[0])

  return (
    <StyledWorkItem>
      <GatsbyImage className="workImage" image={image} alt={introduction} />
      <StyledWorkContent>
        <h2>{name || "Name not listed"}</h2>
        {/* <h3>£ { || "Call"}</h3> */}
        <AniLink className="btn" cover bg="#1d1d1d" to={`/works/${slug}`}>
          View Work
        </AniLink>
      </StyledWorkContent>
    </StyledWorkItem>
  )
}

Work.propTypes = {
  work: propTypes.shape({
    name: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Work
