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
  border-radius: var(--itemCardBorderRadius);
  background: var(--background);
  background: var(--itemPanelBGDark);
  box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);
  
  @media (min-width: 769px){
    margin: auto;
    max-width: 350px;
  }
  @media (min-width: 992px){
    max-width: 400px;
  }
  @media (min-width: 1300px){
    padding: 40px 35px;
  }
  @media (min-width: 1400px){
    padding: 40px 35px;
  }
  h2 {
    margin: 0 0 20px;
    padding: 0 0 0;
    display: inline-block;
  }
  .workImage{
    margin: 0 0 20px;
    width: 100%;
    height: 200px;
    border-radius: var(--itemCardBorderRadius);
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 90%;
    height: 90%;
    background-color: var(--itemCardShadowDark);
    filter: blur(20px);
    transform: translateY(10px) scale(1);
    mix-blend-mode: multiply;
  }
`

const StyledWorkContent = styled.div`
  //background: var(--worksPanelBG);
  //border-top: 3px solid var(--primary);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  //padding: 2.5rem 1.25rem;
  span{
    //padding: 0 0 6px;
  }
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
`

const StyledWorksIntro = styled.p`
  margin: 0 0 20px;
  width: 100%;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

const StyledURL = styled.span`
  
`

const Work = ({ work }) => {
  const { name, slug, images, introduction, url, workId } = work

  const image = getImage(images[0])

  return (
    <StyledWorkItem>
      <h2>{name || "Name not listed"}</h2>
      <GatsbyImage className="workImage" image={image} alt={introduction} />
      <StyledWorkContent>
        {/* <h3>£ { || "Call"}</h3> */}
        <StyledURL>
          {url && url}
        </StyledURL>
        <StyledWorksIntro>{introduction && introduction}</StyledWorksIntro>
        <AniLink 
          //cover 
          //paintDrip 
          //hex="#ffffff99"
          swipe
          direction="up"
          bg="var(--background)" 
          entryOffset={80}
          duration={0.75}
          to={`/works/${slug}`} 
          className="btn" >
          View More
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
