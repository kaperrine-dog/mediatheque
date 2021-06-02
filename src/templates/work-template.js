import {graphql} from "gatsby";
import React from "react";
import styled from "styled-components";
import Accordion from "/src/components/Accordion/Accordion";
import {deleteAllCookies} from '/src/components/Common/Common.js';
import Grid from "/src/components/Grid/Grid";
import Seo from "/src/components/SEO";
import SwiperSlider from "/src/components/SwiperSlider/SwiperSlider.js";




const StyledNarrowImageArea = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / 3;
  cursor: pointer;
  .sideSlider{
    width: 100%;
  }
  @media (min-width: 769px){
    max-width: 350px;
    margin: 0 auto 0;
    display: initial;
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 1;
    .swiperSliderImage{
      max-height: 812px;
      height: auto;
    }
  }
  @media (min-width: 1000px) {
    max-width: 375px;
    margin: 0 0 0 auto;
    display: initial;
    width: 100%;
    grid-column: 3 / 4;
    grid-row: 1 / 1;
    height: fit-content;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 1;
  width: 100%;
  @media (min-width: 769px){
    width: 100%;
    grid-column: 1 / 1;
  }
  @media (min-width: 1000px) {
    width: 100%;
    grid-column: 1 / 3;
  }
  h1 {
    margin-top: 0;
  }
  p {
    margin-bottom: 40px;
  }
  &:last-child{
    
  }
`

const StyledHeader = styled.div`
  grid-column: 1 / 1;
  width: 100%;
  @media (min-width: 769px){
    width: 100%;
    grid-column: 1 / 1;
  }
  @media (min-width: 1000px) {
    width: 100%;
    grid-column: 1 / 4;
  }
  h1 {
    margin-top: 0;
  }
  p {
    margin-bottom: 40px;
  }
`

const StyledImageGallery = styled.div`
  margin: 40px 0 0;
  max-width: 100vw;
  @media(min-width: 1000px){
    margin: 40px 0 40px;
  }
`
const StyledIntroduction = styled.p`
  
`
const StyledURL = styled.span`
  cursor: pointer;
  text-transform: none;
`

const workTemplate = ({ data }) => {
  const {
    name,
    introduction,
    description,
    images,
    narrowImages,
    url,
  } = data.work

  const linkToOtherSites = (e) => {
    e.preventDefault()
    deleteAllCookies()
    window.location.href = `${url}`
  }
  const [ bannerImage, ...mainImages ] = images

  const [ ...subImages ] = narrowImages
  const contentHtml = description.childMarkdownRemark.html
  return <>
    <Seo title={name} />
    <section className="section-padding">
      <Grid>
        <StyledHeader>
          <h1>{ name }</h1>
            { url &&
            <StyledURL
              onClick ={ linkToOtherSites }
              className = "btnEmbed"
              >
                {  `${url}` }
            </StyledURL>
            }
            { introduction && 
            <StyledIntroduction>
              {introduction}
            </StyledIntroduction>
            }
        </StyledHeader>
      </Grid>
      <Grid>
        { subImages && 
        <StyledNarrowImageArea
        //onClick= { linkToOtherSites }
        >
          <Accordion
            title = {"スマートフォン画面キャプチャ"}
            state = {false}
          >
          <SwiperSlider
            images = { subImages }
            />
          </Accordion>
        </StyledNarrowImageArea>
          }
        <ContentArea>
          
          <article
            className="contentArticle"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <button
            className = "btn"
            onClick = { linkToOtherSites }
            >
            Jump to the Site
          </button> 
          { mainImages && (
            <StyledImageGallery>
              <Accordion
                title = {'PC画面キャプチャ'}
                state = {false}
              >
                <SwiperSlider
                  images = { mainImages }
                  />
              </Accordion>
            </StyledImageGallery>
          )}
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
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
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
      narrowImages {
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
