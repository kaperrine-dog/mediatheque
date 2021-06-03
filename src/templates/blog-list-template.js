import {graphql} from "gatsby"
import React from "react"
import styled from "styled-components"
import BlogCard from "/src/components/Blog/BlogCard.js"
import Grid from "/src/components/Grid/Grid.js"
import PageIntro from "/src/components/PageIntro/PageIntro.js"
import Pagination from "/src/components/Pagination/Pagination.js"
import Seo from "/src/components/SEO.js"


const StyledSection = styled.section`
  grid-column: 1 / 1;
  @media (min-width: 769px){
    grid-column: 1 / 2;
    margin-left: -20px;
    margin-right: -20px;
  }
  @media (min-width: 1000px){
    grid-column: 1 / 2;
    margin-left: -20px;
    margin-right: -20px;
  }
`
const StyledFlexContainer = styled.div`
  //display: flex;
  //flex-wrap: wrap;
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
        <PageIntro
          title="Blog"
          subTitle=""
          paragraph=""
        />
        <Grid>
          { data.post.edges ? data.post.edges.map(({ node }, index ) => {
            return (
              <BlogCard 
                  key={node.postId}
                  blog={node}
                  />
                  )
                  
                })
            : <p>投稿がありません。</p>
            }
{/*           <StyledSection>
            <StyledFlexContainer>
              <StyledFlexItem
                className={ index % 3 === 0 ? "FlexItem blogCard3n" : "FlexItem blogCard" }
                >
              </StyledFlexItem>
            </StyledFlexContainer>
          </StyledSection> */}
          { typeof window !== `undefined` &&
            <Pagination
              pageContext = {props.pageContext}
              basePath = {props.pageContext.basePath}
              numPages = {props.pageContext.numPostPages}
            />
          }
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
