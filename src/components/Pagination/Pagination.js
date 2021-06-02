import AniLink from "gatsby-plugin-transition-link";
import React from "react";
import styled from "styled-components";



const StyledPagination = styled.div`
  grid-column: 1 / 4;
  text-align: right;

  .btn {
    margin-right: 20px;

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
      margin-right: 0;
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
          className="btn"
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
              className={i + 1 === currentPage ? "btn btn-active" : "btn"}
            >
              {i + 1}
            </AniLink>
          </>
        )
      })}
      {!isLast && (
        <AniLink
          className="btn"
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