import {graphql, useStaticQuery} from "gatsby"
import React from "react"
import {Link} from "react-scroll"
import About from "../components/About/About"
import Banner from "../components/Banner/Banner"
import FeaturedWorks from "../components/FeaturedWorks/FeaturedWorks"
import Hero from "../components/Hero/Hero"
import Seo from "../components/SEO"
import Service from "../components/Service/Service"
import StyledAbout from "../components/StyledAbout/StyledAbout"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      featuredWorksImg: file(relativePath: { eq: "bark.jpg" }) {
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
        img={data.featuredWorksImg.childImageSharp.gatsbyImageData}
      >
        <FeaturedWorks id="works" largePadding={true} />
      </StyledAbout>
    </>
  )
}

export default Index
