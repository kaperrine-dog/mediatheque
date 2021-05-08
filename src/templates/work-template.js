import {graphql} from "gatsby";
import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion/Accordion";
import {deleteAllCookies} from '../components/Common/Common.js';
import Grid from "../components/Grid/Grid";
import Seo from "../components/SEO";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider.js";




const StyledNarrowImageArea = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / 3;
  cursor: pointer;
  .sideSlider{
    width: 100%;
  }
  @media (min-width: 769px){
    max-width: 350px;
    margin: 95px auto 0;
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
    margin: 95px 0 0 auto;
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
    text-transform: capitalize;
  }
  p {
    margin-bottom: 40px;
  }
  &:last-child{
    
  }
`

const StyledImageGallery = styled.div`
  margin: 40px 0 40px;
  max-width: 100vw;
`
const StyledIntroduction = styled.p`
  
`
const StyledURL = styled.span`
  cursor: pointer;
  text-transform: none;
`


const StyledContentArticle = styled.article`

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
    window.location.href = `http://${url}/`
  }
  const [ bannerImage, ...mainImages ] = images
  const [ ...subImages ] = narrowImages
  const contentHtml = description.childMarkdownRemark.html
  //console.log( description.childMarkdownRemark.html )
  return <>
    <Seo title={name} />
    <section className="section-padding">
      <Grid>
        { subImages && 
        <StyledNarrowImageArea
        //onClick= { linkToOtherSites }
        >
          <Accordion
            title = {"スマートフォン画面キャプチャ"}
            state = {true}
          >
          <SwiperSlider
            images = { subImages }
            />
          </Accordion>
        </StyledNarrowImageArea>
          }
        <ContentArea>
          <h1>{ name }</h1>
          { url &&
          <StyledURL
            onClick ={ linkToOtherSites }
            className = "btnEmbed"
            >
              {  `https://www.${url}/` }
          </StyledURL>
          }
          { introduction && 
          <StyledIntroduction>
            {introduction}
          </StyledIntroduction>
          }
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
          <StyledImageGallery>
            <Accordion
              title = {'PC画面キャプチャ'}
              state = {true}
            >
              <SwiperSlider
                images = { mainImages }
                />
            </Accordion>
          </StyledImageGallery>
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
