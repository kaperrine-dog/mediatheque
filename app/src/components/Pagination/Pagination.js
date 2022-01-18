import AniLink from "gatsby-plugin-transition-link";
import React from "react";
import styled from "styled-components";



const StyledPagination = styled.div`
  grid-column: 1 / 1 ;
  display: flex;
  justify-content: center;
  @media(min-width: 769px){
    grid-column: 1 / 3 ;
    justify-content: center;
  }
  @media(min-width: 1000px){
    grid-column: 1 / 4 ;
    justify-content: flex-end;
  }
  @media(min-width: 1400px){
    grid-column: 1 / 4;
    justify-content: flex-end;
  }

  .btnSmall {
    margin: 0 5px 0;
    @media(min-width: 1000px){
      margin-right: 5px;
      font-size: var(--btnSmallFontSize);
    }
    border-radius: 15px;
    &:hover {
      cursor: pointer;
    }

    &.btn-active {
      color: var(--primary);

      &:after {
        display: none;
      }
    }

    &:last-child {
      @media(min-width: 1000px){
        margin-right: 0;
      }
    }
  }
`


const Pagination = ({ pageContext, basePath, numPages }) => {
  
  const { 
    currentPage,
  } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  console.log(numPages)
  const prevPage =
  currentPage - 1 === 1 ? `${basePath}` : `${basePath}/${currentPage - 1}`
  const nextPage = `${basePath}/${currentPage + 1}`

  return (
  
    <StyledPagination>
      {!isFirst && (
        <AniLink
          cover
          className="btnSmall"
          bg="var(--background)"
          to={prevPage}
        >
          Prev
        </AniLink>
      )}

      {Array.from({ length: numPages }, (_, i) => {
        return (
          <>
            <AniLink
              cover
              key={i}
              bg="var(--background)"
              to={`${basePath}/${i === 0 ? "" : i + 1}`}
              className={i + 1 === currentPage ? "btnSmall btn-active" : "btnSmall"}
            >
              {i + 1}
            </AniLink>
          </>
        )
      })}
      {!isLast && (
        <AniLink
          className="btnSmall"
          cover
          bg="var(--background)"
          to={nextPage}
        >
          Next
        </AniLink>
      )}
    </StyledPagination>
  )
}

export default Pagination