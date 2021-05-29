import {graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styled from "styled-components"
import BlogCard from "/src/components/Blog/BlogCard.js"
import BlogHeader from "/src/components/Blog/BlogHeader.js"
import Grid from "/src/components/Grid/Grid.js"
import PageIntro from "/src/components/PageIntro/PageIntro.js"
import Seo from "/src/components/SEO.js"


const StyledSection = styled.section`
  grid-column: 1 / 1;
  @media (min-width: 769px){
    grid-column: 1 / 4;
    margin-left: -20px;
    margin-right: -20px;
  }
`
const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .blogCardEven{
  }
  .blogCardOdd{
  }
  .FlexItem{
  }
`

const StyledFlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;
  @media (min-width: 769px){
    margin-bottom: 60px;
  }
  @media (min-width: 1000px){
    margin-bottom: 60px;
  }
  @media (min-width: 1300px){
    margin-bottom: 60px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 769px) {
    flex: 0 0 calc(100% / 2);
  }
  @media (min-width: 992px) {
    flex: 0 0 calc(100% / 2);
  }
  @media (min-width: 1300px) {
    flex: 0 0 calc(100% / 3);
  }
`

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

const Spacer = styled.div`
  height: 30px;
  @media (min-width: 769px) {
    height: 115px;
  }
  @media (min-width: 1000px) {
    height: 115px;
  }
  @media (min-width: 1200px) {
    height: 100px;
  }
`

const Blog = props => {
  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`
  const { data } = props
  return (
    <>
      <Seo title="Blogs" />
{/*       <Spacer/>
      <BlogHeader/> */}
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="Blog"
            subTitle=""
            paragraph=""
          />
          <StyledSection>
            <StyledFlexContainer>
              {data.post.edges.map(({ node }, index ) => {
                return (
                  <StyledFlexItem
                    className={ index % 3 === 0 ? "FlexItem blogCard3n" : "FlexItem blogCard" }
                  >
                    <BlogCard 
                      key={node.postId}
                      blog={node}
                    />
                  </StyledFlexItem>
                )
                
              })}
            </StyledFlexContainer>
          </StyledSection>
          <StyledPagination>
            {!isFirst && (
              <AniLink
                className="btnEmbed"
                cover
                bg="var(--background)"
                to={prevPage}
              >
                Prev
              </AniLink>
            )}

            {Array.from({ length: numPages }, (_, i) => {
              return (
                <AniLink
                  key={i}
                  cover
                  bg="var(--background)"
                  to={`/blogs/${i === 0 ? "" : i + 1}`}
                  className={i + 1 === currentPage ? "btn btn-active" : "btnEmbed"}
                >
                  {i + 1}
                </AniLink>
              )
            })}
            {!isLast && (
              <AniLink
                className="btnEmbed"
                cover
                bg="var(--background)"
                to={nextPage}
              >
                Next
              </AniLink>
            )}
          </StyledPagination>
        </Grid>
      </section>
    </>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    post: allContentfulPosts(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          postId: contentful_id
          introduction
          published(formatString: "Y年MM月DD日")
          images {
            gatsbyImageData(width: 600, formats: [AUTO, WEBP])
          }
          tags{
            title
            slug
            image{
              file{
                url
                fileName
              }
            }
          }
        }
      }
    }
  }
`
export default Blog
