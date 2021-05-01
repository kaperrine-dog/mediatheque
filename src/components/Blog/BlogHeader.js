//import AniLink from "gatsby-plugin-transition-link/AniLink"
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledBlogHeader = styled.div`
  width: 100vw;
  max-width: 1400px;
  position: relative;
  height: 200px;
  margin: 0 auto;
  .blogHeaderBG{
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 4;
  }
  .title{
    color: white;
    font-size: var(--h1);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      margin: auto 0;
    }
  }
  background: var(--background);
`

const BlogHeader = ({  }) => {
  const {placeholderImage} = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "whiteRose.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  return(
    <StyledBlogHeader>
      <GatsbyImage
        image={image} 
        alt="blog header image" 
        className="blogHeaderBG"
      />
      <div className="title">
        <span>
          {"の日常"}
        </span>
      </div>
    </StyledBlogHeader>
  )
}

export default BlogHeader