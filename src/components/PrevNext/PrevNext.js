import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styled from "styled-components"
const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media(min-width:769px){
    flex-direction: row;
  }
`
const StyledCards = styled.div`
  width: 100%;
  padding: 20px 20px 40px;
  @media(min-width:769px){
    width: calc( 100% / 2 - 30px);
  }
  @media(min-width:1000px){
    width: calc( 100% / 2 - 70px);
  }
  .header{
    display: flex;
    align-items: center;
    .textPrev{
      position: relative;
      margin-right: auto;
      margin-left: 10px;
      @media(min-width:769px){
        text-align: left;
      }
      &:before{
      }
      &:after{
      }
    }
    .textNext{
      position: relative;
      margin-left: auto;
      margin-right: 10px;
      @media(min-width:769px){
        text-align: right;
      }
    }
    .stickArrowPrev {
      width: 40px;
      height: 10px;
      border-bottom: 2px solid var(--textColor);
      border-left: 3px solid var(--textColor);
      -ms-transform: skew(45deg);
      transform: skew(-45deg);
      margin: 0 0 0 10px;
    }
    .stickArrowNext {
      width: 40px;
      height: 10px;
      border-bottom: 2px solid var(--textColor);
      border-right: 3px solid var(--textColor);
      transform: skew(45deg);
      margin: 0 20px 0 0;
    }
  }

  a{
    display: flex;
    align-items: center;
    img{
      width: 60px;
      height: 45px;
      object-fit: cover;
      object-position: 50% 50%;
      margin: 0 15px;
    }
    h4{
      margin: auto 0;
    }
  }
  @media (max-width: 768px){
    .prevLink{
      width: fit-content;
      margin-left: auto;
    }
    .nextLink{
      width: fit-content;
      margin-right: auto;
    }
  }
`

const PrevNext = ({ prev, next },index) => {

  return(
    <StyledCardsContainer>
      <>
        <StyledCards
        className = "prev glass-morphizm"
        >
        { prev !== null && (
          <>
            <div className="header">
              <span className="stickArrowPrev"></span>
              <div className="textPrev">
                { prev ? ( `前の記事` ) : (`次の記事`) }
              </div>
            </div>
            <AniLink
              className="prevLink"
              swipe
              direction="right"
              bg="var(--background)" 
              entryOffset={80}
              duration={0.75}
              to={ `/blogs/${prev.slug}` }
            >
              <h4>{ `${prev.title}` }</h4>
              <img
                src = {`${prev.images[0].file.url}`}
                className="nextImage thumbnailImage"
                alt="Placeholder"
              />
            </AniLink>
          </>
        ) }
        </StyledCards>

        <StyledCards
          className="next glass-morphizm"
        >
          {
            next !== null && (
              <>
                <div className="header">
                  <div className="textNext">
                    { next ? ( `次の記事` ) : (`前の記事`) }
                  </div>
                  <span className="stickArrowNext"></span>
                </div>
                <AniLink
                  className="nextLink"
                  swipe
                  direction="left"
                  bg="var(--background)" 
                  entryOffset={80}
                  duration={0.75}
                  to={`/blogs/${next.slug}`}
                >
                  <img
                    src = {`${next.images[0].file.url}`}
                    className="nextImage thumbnailImage"
                    alt="Placeholder"
                  />
                  <h4>{ `${next.title}` }</h4>
                </AniLink>
              </>
            )
          }
        </StyledCards>
      </>
    </StyledCardsContainer>
  )
}

export default PrevNext

