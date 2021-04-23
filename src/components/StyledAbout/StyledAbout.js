import {graphql, useStaticQuery} from "gatsby";
import {getImage} from "gatsby-plugin-image";
import {convertToBgImage} from "gbimage-bridge";
import React from "react";
import {Background, Parallax} from 'react-parallax';
import parallaxBGImg from "../../images/mac-white-bg.jpeg";

const StyledAbout = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mac-white-bg.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  
  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)
  console.log(image)
  console.log(bgImage)
  return (
    <Parallax 
      blur={{ min: -1, max: 1 }}
      bgImage={parallaxBGImg}
      bgImageAlt="the parallax-bg"
      strength={2000}
      style={{
        width: "100vw",
        height: "100vh"
      }}
      bgImageStyle={{
        width: "100vw",
        height: "100vh",
        objectFit: 'cover',
      }}
    /* Tag="section" {...bgImage} */>
      <Background 
        style={{ 
          width: "100vw",
          height: "100vh"
          //backgroundColor: "rgba(0,0,0,0.7)" 
        }}
        >
      </Background>
          {children}
    </Parallax>
  )
}

export default StyledAbout
