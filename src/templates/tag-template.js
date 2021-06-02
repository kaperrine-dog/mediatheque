import {graphql} from "gatsby"
//import AniLink from "gatsby-plugin-transition-link/AniLink"
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



const Tags = ( props )=> {
  const { currentPage, numTagPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numTagPages
  //const { slug, posts } = data.tags
  const { data } = props
  const blogPosts = data.tags.posts
  const prevPage =
    currentPage - 1 === 1 ? `/tags/${data.tags.slug}` : `/tags/${data.tags.slug}/${currentPage - 1}`
  const nextPage = `/tags/${data.tags.slug}/${currentPage + 1}`

  return (
    <>
      <Seo title="Tags" />
{/*       <Spacer/>
      <BlogHeader/> */}
      <section className="section-padding">
        <Grid>
          <PageIntro
            title={`${data.tags.title}に関する記事の一覧`}
            subTitle=""
            paragraph=""
            iconUrl={data.tags.image.file.url}
            iconAlt={data.tags.image.file.fileName}
          />
          <StyledSection>
            <StyledFlexContainer>
              {blogPosts.map(( post , index ) => {
                return (
                  <StyledFlexItem
                    className={ index % 3 === 0 ? "FlexItem blogCard3n" : "FlexItem blogCard" }
                  >
                    <BlogCard 
                      key={index}
                      blog={post}
                    />
                  </StyledFlexItem>
                )
                
              })}
            </StyledFlexContainer>
          </StyledSection>
          { typeof window !== `undefined` &&
            <Pagination
              pageContext = {props.pageContext}
              basePath = {props.pageContext.basePath}
              numPages = {props.pageContext.numTagPages}
            />
          }
        </Grid>
      </section>
    </>
  )
}

export const query = graphql`
  query contentfulTagBySlug ($slug: String!){
    tags:contentfulTags(
      slug: { eq: $slug }
      ){
      title
      slug
      posts{
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
      image{
        file{
          url
          fileName
        }
      }
    }
    
  }
  `

export default Tags
