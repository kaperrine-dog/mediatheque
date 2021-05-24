import {GatsbyImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styled from "styled-components"
const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const StyledCards = styled.div`

`

const PrevNext = ({ prev, next, info },index) => {

  return(
    <StyledCardsContainer>
        <StyledCards>
      { prev !== null && (
        <>
          <div>{ prev ? ( `前の記事` ) : (`次の記事`) }</div>
          <AniLink
            swipe
            direction="right"
            bg="var(--background)" 
            entryOffset={80}
            duration={0.75}
            to={ `/blogs/${prev.slug}` }
          >
            <GatsbyImage
              
            />

          </AniLink>
        </>
      ) }
        </StyledCards>
      {
        next !== null && (
        <StyledCards>
          <div>{ prev ? ( `前の記事` ) : (`次の記事`) }</div>
          <AniLink
          swipe
          direction="left"
          bg="var(--background)" 
          entryOffset={80}
          duration={0.75}
          to={`/blogs/${next.slug}`}
          >
            <GatsbyImage
              
            />
            <h3>{ `~~` }</h3>
          </AniLink>
        </StyledCards>
        )
      }
    </StyledCardsContainer>
  )
}

export default PrevNext

