import {StaticImage} from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import authorInfo from "/src/constants/authorInfo.js"


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
  h3{

  }
`

const StyledSelfIntroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .avatorImage{
    border-radius: 50%;
    img{
      border-radius: 50%;
      transform: scale(1.2,1.2);
    }
  }
  .skills{
    width: 45%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    .staticImageIcon{
      margin: 2.5px;
      width: 30px;
      height: 30px;
    }
    img{
      width: 25px;
      height: 25px;
      margin: 2.5px;
      object-fit: contain;
    }
  }
`

const StyledRightContent = styled.div`
  
`

const SelfIntroduction = () => {

  return(
    <StyledSelfIntroSection
      className = "glass-container"
    >
      <StyledContentGrid>
        <StyledSelfIntroHeader>
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
            <StaticImage
              className = "staticImageIcon"
              width={25}
              height={25}
              src = {`../../images/icons/skills/javascript.svg`}  
            />
            <StaticImage
              className = "staticImageIcon"
              width={25}
              height={25}
              src = {`../../images/icons/skills/react.svg`}  
            />
            <StaticImage
              className = "staticImageIcon"
              width={25}
              height={25}
              src = {`../../images/icons/skills/python.svg`}  
              />
            <StaticImage
              className = "staticImageIcon"
              width={25}
              height={25}
              src = {`../../images/icons/skills/gatsby.svg`}  
              />
            <StaticImage
              className = "staticImageIcon"
              width={25}
              height={25}
              src = {`../../images/icons/skills/centos.svg`}  
              />
            <StaticImage
              className = "staticImageIcon"
              width={25}
              height={25}
              src = {`../../images/icons/skills/ubuntu.svg`}  
            />
          </div>
        </StyledSelfIntroHeader>
        
        <h3>{ authorInfo.author }</h3>
        <p>
          { authorInfo.introduction }
        </p>
      </StyledContentGrid>
    </StyledSelfIntroSection>
  )
}

export default SelfIntroduction