import React from "react"
import styled from "styled-components"
import authorInfo from "../../constants/authorInfo.js"


const StyledSelfIntroSection = styled.section`
  width: 100%;

`


const SelfIntroduction = () => {

  return(
    
    <StyledSelfIntroSection
    
    >
      <div>
        <img/>
        <h3>{authorInfo.author}</h3>
        <p>
          {authorInfo.introduction}
        </p>
      </div>
    </StyledSelfIntroSection>
  )
}

export default SelfIntroduction