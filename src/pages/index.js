import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "react-scroll"
import About from "/src/components/About/About"
import Banner from "/src/components/Banner/Banner"
import FeaturedWorks from "/src/components/FeaturedWorks/FeaturedWorks"
import Hero from "/src/components/Hero/Hero"
import Seo from "/src/components/SEO"
import Service from "/src/components/Service/Service"
import StyledAbout from "/src/components/StyledAbout/StyledAbout"

const Index = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        placeholderImageLight_1: file(relativePath: { eq: "whiteAbstract.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF, JPG]
              layout: CONSTRAINED
            )
          }
        }
        placeholderImageDark_1: file(relativePath: { eq: "jellyfish01.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF, JPG]
              layout: CONSTRAINED
            )
          }
        }
        placeholderImageLight_2: file(relativePath: { eq: "iceage_large.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF, JPG]
              layout: CONSTRAINED
            )
          }
        }
        placeholderImageDark_2: file(relativePath: { eq: "jellyfish01.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF, JPG]
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )
  

  return (
    <>
      <Seo title="Home" />
      <Hero>
        <Banner
          title={data.site.siteMetadata.title}
          info={data.site.siteMetadata.description}
        >
          <Link className="btn" to="about" smooth={true} duration={500}>
            Learn More
          </Link>
        </Banner>
      </Hero>
      
      <StyledAbout
        imgLight={data.placeholderImageLight_1}
        imgDark={data.placeholderImageDark_1}
      >
        <About id="about" largePadding={true} />
      </StyledAbout>
      <Service largePadding={true} />
      <StyledAbout
        imgLight={data.placeholderImageLight_2}
        imgDark={data.placeholderImageDark_1}
      >
        <FeaturedWorks id="works" largePadding={true} />
      </StyledAbout>
    </>
  )
}



export default Index
