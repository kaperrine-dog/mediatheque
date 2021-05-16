import {StaticImage} from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import authorInfo from "../../constants/authorInfo.js"


const StyledSelfIntroSection = styled.section`
  width: 100%;
  height: 100%;
  .avatorImage{
    border-radius: 50%;
    img{
      border-radius: 50%;
    }
  }
  @media (min-width:769px){
  }
`
const StyledContent = styled.div`
  
`

const StyledRightContent = styled.div`
  
`

const SelfIntroduction = () => {

  return(
    <StyledSelfIntroSection
      
    >
      <StyledContent>
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
        <h3>{ authorInfo.author }</h3>
        <p>
          { authorInfo.introduction }
        </p>
      </StyledContent>
    </StyledSelfIntroSection>
  )
}

export default SelfIntroduction