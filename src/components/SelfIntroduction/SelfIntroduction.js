import {StaticImage} from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import authorInfo from "../../constants/authorInfo.js"


const StyledSelfIntroSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px;
  @media (min-width:769px){
  }
`
const StyledContentGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  .avatorImage{
    border-radius: 50%;
    img{
      border-radius: 50%;
      transform: scale(1.2,1.2);
    }
  }
  h3{

  }

`

const StyledRightContent = styled.div`
  
`

const SelfIntroduction = () => {

  return(
    <StyledSelfIntroSection
      className = "neumorphizm"
    >
      <StyledContentGrid>
        <StaticImage
          className = "avatorImage"
          src = { "../../images/ago.jpg" }
          alt="avator-image"
          placeholder="blurred"
          layout="fixed"
          width={100}
          height={100}
          objectFit
        />
        <div className = "skills">
          { 
          }
        </div>
        <h3>{ authorInfo.author }</h3>
        <p>
          { authorInfo.introduction }
        </p>
      </StyledContentGrid>
    </StyledSelfIntroSection>
  )
}

export default SelfIntroduction