import {graphql} from "gatsby";
import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion/Accordion";
import {deleteAllCookies} from '../components/Common/Common.js';
import Grid from "../components/Grid/Grid";
import Seo from "../components/SEO";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider.js";

const ImageLinkArea = styled.div`
  grid-column: 1 / 1;
  grid-row: 4 / 5;
  cursor: pointer;
  .main-image {
    //border-bottom: 3px solid var(--primary);
  }
  .sideSlider{
    width: 100%;
  }
  @media (min-width: 769px){
    width: 100%;
    max-width: 375px;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  @media (min-width: 1000px) {
    height: fit-content;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 4;
  width: 100%;
  @media (min-width: 769px){
    width: 100%;
    grid-column: 1 / 2;
  }
  @media (min-width: 1000px) {
    width: 100%;
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


const workTemplate = ({ data }) => {
  const {
    name,
    introduction,
    description: { description },
    images,
    narrowImages,
    url,
    accordion,
  } = data.work

  const linkToOtherSites = (e) => {
    e.preventDefault()
    deleteAllCookies()
    window.location.href = `http://${url}/`
  }

  const [ mainImage_1, mainImage_2, ...workImages] = images
  const [ ...sideImages ] = narrowImages
  return <>
    <Seo title={name} />
    <section className="section-padding">
      <Grid>
        { sideImages && 
        <ImageLinkArea
        //onClick= { linkToOtherSites }
        >
          <div className="sideSlider">
            <SwiperSlider
              images = { sideImages }
              />
          </div>
        </ImageLinkArea>
          }
        <ContentArea>
          <h1>{ name }</h1>
          { url &&
          <StyledURL
            onClick ={ linkToOtherSites }
            >
              { url }
          </StyledURL>
          }
          { introduction && 
          <StyledIntroduction>
            {introduction}
          </StyledIntroduction>
          }
          <p>{ description }</p>
          <button
            className = "btn"
            onClick = { linkToOtherSites }
            >
            Jump to the Site
          </button> 
          

          <SwiperSlider
            images = { workImages }
            />
{/*           
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
          
 */}          
          { accordion && 
          <AccordionBlock>
            { accordion.map((item, index) => {
              return (
                <Accordion
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              )
            })}
          </AccordionBlock>
          }
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
        gatsbyImageData(
          
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP]
        )
        description
        title
        workImageId: contentful_id
      }
      url
    }
  }
`

export default workTemplate
