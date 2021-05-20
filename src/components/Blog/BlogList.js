import {graphql, useStaticQuery} from "gatsby"
import React from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"

const Section = styled.section`
  grid-column: 1 / 4;
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 769px) {
    flex: 0 0 calc(100% / 2);
  }
  @media (min-width: 1200px) {
    flex: 0 0 calc(100% / 3);
  }
`

const getPosts = graphql`
  query {
    posts: allContentfulPosts(
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          published(formatString: "Y年MM月DD日")
          title
          slug
          introduction
          postId: contentful_id
          images {
            gatsbyImageData(width: 600, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <Section>
      <FlexContainer>
        {posts.edges.map(({ node }) => {
          return (
            <BlogCard key={node.postId} blog={node} />
          )
        })}
      </FlexContainer>
    </Section>
  )
}

export default BlogList
