import React from "react"
import { graphql } from "gatsby"
import Grid from "../components/Grid/Grid"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Seo from "../components/SEO"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const DetailArea = styled.div`
  grid-column: 1 / 4;

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 40px;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 2;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 1200px) {
    grid-column: 2 / 4;
  }

  h1 {
    margin-top: 0;
    text-transform: capitalize;
  }

  .main-image {
    border-bottom: 3px solid var(--primary);
    margin-top: 40px;
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 40px;
  }
`

const Blog = ({ data }) => {
  const {
    title,
    introduction,
    published,
    images,
    richText,
    richText: { raw },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        return (
          <div>
            <img
              width="100%"
              src={node.data.target.fields.file["en-US"].url}
              alt="Placeholder"
            />
          </div>
        )
      },
    },
  }

  return (
    <>
      <Seo title={title} />
      <section className="section-padding">
        <Grid>
          <DetailArea>
            <h2>{introduction}</h2>
            <p>Published on - {published}</p>
            <AniLink className="btn" cover bg="var(--background)" to="/blogs">
              Back to Blogs
            </AniLink>
          </DetailArea>
          <ContentArea>
            <h1>{title}</h1>
            {/* <GatsbyImage
            image={images.childImageSharp.gatsbyImageData}
            className="main-image"
            alt="Placeholder" /> */}
            <article>{renderRichText(richText, options)}</article>
          </ContentArea>
        </Grid>
      </section>
    </>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      introduction
      published(formatString: "MMMM Do YYYY")
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      richText {
        raw
      }
    }
  }
`

export default Blog
