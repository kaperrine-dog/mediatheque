import {GatsbyImage, getImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styled from "styled-components"
//import { Background } from 'react-parallax';

const BlogItem = styled.article`
  width: 100%;
  padding: 0 20px;
`

const BlogItemContent = styled.div`
  background-color: var(--blogPanelBG);
  border-top: 3px solid var(--primary);
  padding: 1.5rem 1.25rem;
  min-height: 14rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;


  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    max-width: calc((100vw - 60px - 80px) / 3);
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    display: inline-block;
  }

  p {
    margin-bottom: 40px;
  }
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    padding: 0 0 6px;
  }
`

const BlogCard = ({ blog }) => {
  const { slug, title, images, published } = blog

  // let mainImage = images[0].fluid
  const image = getImage(images[0])
  return (
    <BlogItem>
      <AniLink
        className="btn"
        cover
        bg="var(--background)"
        to={`/blogs/${slug}`}
      >
        <GatsbyImage image={image} alt="Single Post" />
        <BlogItemContent>
          <h2>{title}</h2>
          <Bottom>
            <span>{published}</span>
            <button className="btn">Read Post</button>
          </Bottom>
        </BlogItemContent>
      </AniLink>
    </BlogItem>
  )
}

export default BlogCard
