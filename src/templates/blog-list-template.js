import {graphql} from "gatsby"
import React from "react"
import BlogCard from "/src/components/Blog/BlogCard.js"
import Grid from "/src/components/Grid/Grid.js"
import PageIntro from "/src/components/PageIntro/PageIntro.js"
import Pagination from "/src/components/Pagination/Pagination.js"
import Seo from "/src/components/SEO.js"


const Blog = props => {
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
