import {GatsbyImage, getImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styled from "styled-components"
//import { Background } from 'react-parallax';

const StyledBlogItem = styled.article`
  width: 100%;
  margin: auto auto;
  padding: 40px 35px;
  position: relative;
  min-width: 325px; 
  max-width: 500px;
  border-radius: var(--itemCardBorderRadius);
  background: var(--background);
  background: var(--itemPanelBGDark);
  box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);

  @media (min-width: 769px){
    margin: auto;
    max-width: 350px;
  }
  @media (min-width: 992px){
    max-width: 400px;
  }
  @media (min-width: 1300px){
    padding: 40px 35px;
  }
  @media (min-width: 1400px){
    padding: 40px 35px;
  }
  .btn{
    &:after{
      width: 95%;
    }
  }
  .blogImage{
    width: 100%;
    height: 200px;
    border-radius: var(--itemCardBorderRadius);
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 90%;
    height: 90%;
    background-color: var(--itemCardShadowDark);
    filter: blur(20px);
    transform: translateY(10px) scale(1);
    mix-blend-mode: multiply;
  }
`
const StyledBlogCardTitle = styled.h2`
  margin: 0 0 20px;
  padding: 0 0px;
  display: inline-block;
`

const StyledBlogItemContent = styled.div`
  //background-color: var(--blogPanelBG);
  //border-top: 3px solid var(--primary);
  padding: 1.5rem 0 0;
  min-height: 20rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    max-width: calc((100vw - 60px - 40px) / 2);
    margin-bottom: 0;
  }
  @media (min-width: 1300px) {
    max-width: calc((100vw - 60px - 80px) / 3);
  }
`
const StyledBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    padding: 0 0 6px;
  }
`

const StyledBlogIntro = styled.p`
  margin: 0 0 auto;
  width: 100%;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

const BlogCard = ({ blog }) => {
  const { slug, title, images, published, introduction } = blog

  // let mainImage = images[0].fluid
  const image = getImage(images[0])
  return (
    <StyledBlogItem>
      <AniLink
        className="btnSolid"
        cover
        direction="up"
        //swipe
        //entryOffset={100}
        duration={1}
        bg="var(--background)"
        to={`/blogs/${slug}`}
        >
        <StyledBlogCardTitle>
          {title}
        </StyledBlogCardTitle>
        <GatsbyImage className="blogImage" image={image} alt="Single Post" />
        <StyledBlogItemContent>
          <StyledBlogIntro>
              {introduction}
          </StyledBlogIntro>
          <StyledBottom>
            <span>{published}</span>
            <button className="btn">Read Post</button>
          </StyledBottom>
        </StyledBlogItemContent>
      </AniLink>
    </StyledBlogItem>
  )
}

export default BlogCard
