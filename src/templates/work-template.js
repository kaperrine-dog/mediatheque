import {graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Button from "../components/Button/Button";
import Grid from "../components/Grid/Grid";
import Seo from "../components/SEO";

const ImageLinkArea = styled.a`
  grid-column: 1 / 4;
  height: fit-content;
  .main-image {
    border-bottom: 3px solid var(--primary);
  }
  @media (min-width: 765px){
    grid-column: 1 / 2;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / 2;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 1000px) {
    grid-column: 2 / 4;
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
    faq,
  } = data.product

  
  const [mainImage, ...productImages] = images
  return <>
    <Seo title={name} />
    <section className="section-padding">
      <Grid>
        
        <ImageLinkArea
          href={ url }
        >
          <GatsbyImage 
            image={mainImage.gatsbyImageData} 
            className="main-image" 
          />
        </ImageLinkArea>
        <ContentArea>
          <h1>{name}</h1>
          <StyledURL
            onClick ={
              () => {
                {deleteAllCookies()}
                window.location.href = `http://${url}`
              }
            }
            >
          {url && url}
          </StyledURL>
          <StyledIntroduction>
            {introduction && introduction}
          </StyledIntroduction>
          <p>{description}</p>
          <Button text="Enquire Now" link="/contact" />
          <ImageGallery>
            {productImages && productImages.map((item, index) => {
              return (
                <GatsbyImage
                  image={item.gatsbyImageData}
                  className="image-gallery--item"
                  key={index}
                  alt="Single product" />
              );
            })}
          </ImageGallery>
          <AccordionBlock>
            { faq && faq.map((item, index) => {
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
    product: contentfulWorks(slug: { eq: $slug }) {
      name
      introduction
      description {
        description
      }
      faq {
        title
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
        gatsbyImageData
      }
      url
    }
  }
`

export default workTemplate
