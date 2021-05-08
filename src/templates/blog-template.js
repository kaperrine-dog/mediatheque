import {graphql} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//import Accordion from "../components/Accordion/Accordion";
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import BlogHeader from "../components/Blog/BlogHeader"
import Grid from "../components/Grid/Grid"
import RecentPosts from "../components/RecentPosts/RecentPosts.js"
import Seo from "../components/SEO"

const DetailArea = styled.div`
  grid-column: 1 / 1;
  h2 {
    margin-top: 0;
  }
  p {
    margin-bottom: 40px;
  }
  @media (min-width: 769px) {
    grid-column: 1 / 2;
    width: 200%;
  }
  @media (min-width: 1000px) {
    margin: var(--marginBorder) 0;
    width: 100%;
    grid-column: 3 / 4;
  }
  @media (min-width: 1200px) {
    width: 100%;
    grid-column: 3 / 4;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 1;
  margin: var(--marginBorder) 0;
  @media (min-width: 769px) {
    grid-column: 1 / 1;
    width: 200%;
  }
  @media (min-width: 1000px) {
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  @media (min-width: 1200px) {
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  h1 {
    margin-top: 0;
  }
  p {
    margin-bottom: 40px;
  }
`

const StyledBlogImage = styled.div`
  width: 100%;
  margin: var(--marginBorder) 0;
  border-radius: var(--itemCardBorderRadius);
  background: var(--background);
  box-shadow:  -10px 10px 20px var(--neumorphismShadow),
                10px -10px 20px var(--neumorphizmLight);
  padding: 20px 15px 20px;
  @media (min-width: 769px){
    padding: 40px;
  }
  .main-image {
    max-height: 300px;
    //aspect-ratio: 16 / 9;
    border-bottom: 3px solid var(--primary);
    border-left: 1px solid var(--primary);
    border-right: 2px solid var(--primary);
    border-top: 1px solid var(--primary);
    border-radius: var(--itemCardBorderRadius);
    img{
    }
  }
`


const Blog = ({ data }) => {
  const {
    title,
    introduction,
    published,
    images,
    content,
  } = data.post
  
  const [mainImage, ...blogImages] = images
  const contentHtml = content.childMarkdownRemark.html
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        return (
          <div>
            <img
              width="100%"
              src={node.data.target.fields.file["ja-JP"].url}
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
      <BlogHeader/>
      <section className="section-padding">
        <Grid>
          <ContentArea>
            <h1>{title}</h1>
            <StyledBlogImage>
              <GatsbyImage
                image={mainImage.gatsbyImageData}
                className="main-image neumorphizmLarge"
                alt="Placeholder" />
            </StyledBlogImage>
            <article
              className = "contentArticle"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </ContentArea>
          <DetailArea>
            <h2 
              className='contentIntroduction'
              >
              {introduction}
            </h2>
            <p>Published on - {published}</p>
            <AniLink 
              className="btn" 
              cover 
              bg="var(--background)" 
              to="/blogs">
              Back to Blogs
            </AniLink>
            <RecentPosts/>
          </DetailArea>
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
      published(formatString: "Y年MM月DD日")
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP]
        )
      }
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`



Blog.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      introduction: PropTypes.string.isRequired,
      published: PropTypes.instanceOf(Date).isRequired,
      images: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired,
      ]),
      content: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string.isRequired,
        })
      })
    }
    ),
  }),
}


export default Blog
