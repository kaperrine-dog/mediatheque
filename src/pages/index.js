import React from "react"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import StyledAbout from "../components/StyledAbout/StyledAbout"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/SEO"
import { Link } from "react-scroll"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      featuredProductsImg: file(relativePath: { eq: "bark.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `)

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
      <StyledAbout>
        <About id="about" largePadding={true} />
      </StyledAbout>
      <Service largePadding={true} />
      <StyledAbout
        gradient="true"
        img={data.featuredProductsImg.childImageSharp.gatsbyImageData}
      >
        <FeaturedProducts id="products" largePadding={true} />
      </StyledAbout>
    </>
  )
}

export default Index
