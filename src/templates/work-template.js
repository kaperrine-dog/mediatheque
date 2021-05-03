import {graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion/Accordion";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Seo from "../components/SEO";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider.js";

const ImageLinkArea = styled.div`
  grid-column: 1 / 4;
  height: fit-content;
  cursor: pointer;
  .main-image {
    //border-bottom: 3px solid var(--primary);
  }
  @media (min-width: 765px){
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  @media (min-width: 1000px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 765px){
    grid-column: 1 / 3;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / 3;
  }

  h1 {
    margin-top: 0;
    text-transform: capitalize;
  }

  p {
    margin-bottom: 40px;
  }
`

const Iframe = styled.iframe`
  width: 100%;
  min-height: 400px;
  aspect-ratio: 16 / 9;
  //background: white;
`

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  .image-gallery--item {
    //aspect-ratio: 16 / 9;
    flex: 0 0 calc(50% - 10px);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (min-width: 769px) {
    margin-top: 20px;
    margin-bottom: 20px;
    .image-gallery--item {
      flex-basis: calc((100% / 3) - 40px);
      margin-top: 20px;
      margin-bottom: 20px;
      
    }
  }

  @media (min-width: 1200px) {
    .image-gallery--item {
      
      flex-basis: calc(50% - 20px);
    }
  }
`
const StyledIntroduction = styled.p`
  
`
const StyledURL = styled.span`
  cursor: pointer;
  
`

const AccordionBlock = styled.div`
  margin-top: 40px;
  
`

const deleteAllCookies = () => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;max-age=0'
  }
}

const workTemplate = ({ data }) => {
  const {
    name,
    introduction,
    description: { description },
    images,
    url,
    accordion,
  } = data.work

  const linkToOtherSites = () => {
    deleteAllCookies()
    window.location.href = `http://${url}/index.html`
  }

  const [mainImage, ...workImages] = images
  return <>
    <Seo title={name} />
    <section className="section-padding">
      <Grid>
        <ImageLinkArea
          onClick= { linkToOtherSites }
          >
          <GatsbyImage 
            image={mainImage.gatsbyImageData} 
            className="main-image" 
          />
        </ImageLinkArea>
        <ContentArea>
          <h1>{name}</h1>
          <StyledURL
            onClick ={ linkToOtherSites }
            >
          {url && url}
          </StyledURL>
          <StyledIntroduction>
            {introduction && introduction}
          </StyledIntroduction>
          <p>{description}</p>
          <Button text="Enquire Now" link="/contact" />
          <SwiperSlider
            images = { images }
            />
          <ImageGallery>
            {workImages && workImages.map((item, index) => {
              return (
                <GatsbyImage
                  image={item.gatsbyImageData}
                  className="image-gallery--item"
                  key={item.workImageId}
                  alt={item.title} />
              );
            })}
          </ImageGallery>
          <AccordionBlock>
            { accordion && accordion.map((item, index) => {
              return (
                <Accordion
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              )
            })}
          </AccordionBlock>
        </ContentArea>
      </Grid>
    </section>
  </>;
}

export const query = graphql`
  query($slug: String) {
    work: contentfulWorks(slug: { eq: $slug }) {
      name
      introduction
      description {
        description
      }
      accordion {
        title
        description
        id
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
        gatsbyImageData
        description
        title
        workImageId: contentful_id
      }
      url
    }
  }
`

export default workTemplate
