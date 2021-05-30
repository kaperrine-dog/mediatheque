import {graphql, useStaticQuery} from "gatsby";
import React from "react";
import styled from "styled-components";
import Grid from "../Grid/Grid";
//import {StaticImage} from "gatsby-plugin-image"
import BlogCard from '/src/components/Blog/BlogCard.js';

const StyledServiceItem = styled.article`
  //background-color: var(--servicesPanelBG);
  //border-top: 3px solid var(--primary);
  padding: 2.25rem 2.25rem;
  border-radius: var(--itemCardBorderRadius);
  box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`



const Service = ({ largePadding }) => {
  const {
    posts
  } = useStaticQuery(getPosts)

  return (
    <section
      className={
        largePadding
          ? "section-padding section-padding--large"
          : "section-padding"
      }
    >
      <Grid>
         {posts.edges.map(({ node }, index ) => {
           index++
           return (
              <BlogCard 
                key={node.postId}
                blog={node}
              />
          )
        })} 
        
      </Grid>
    </section>
  )
}

const getPosts = graphql`
  query {
    posts: allContentfulPosts(
      limit: 3
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
            fluid {
              ...GatsbyContentfulFluid
            }
            gatsbyImageData(
              layout: FULL_WIDTH
              formats: [AUTO, WEBP]
              placeholder: TRACED_SVG
            )
          }
          tags{
            title
            slug
            image{
              title
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

export default Service
