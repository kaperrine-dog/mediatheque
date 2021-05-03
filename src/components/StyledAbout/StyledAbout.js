import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
//import {BgImage} from 'gbimage-bridge';
import React from "react";
//import Image from "react-image-webp";
import {Background, Parallax} from 'react-parallax';


const StyledAbout = ({ children }) => {
  const { placeholderImageDark, placeholderImageLight } = useStaticQuery(
    graphql`
      query {
        placeholderImageLight: file(relativePath: { eq: "whiteAbstract.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        placeholderImageDark: file(relativePath: { eq: "jellyfish01.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const bgImageLight = getImage(placeholderImageLight)
  //const bgImageLight = convertToBgImage(imageLight)
  const bgImageDark = getImage(placeholderImageDark)
  //const bgImageDark = convertToBgImage(imageDark)

  console.log(bgImageLight)
  console.log(bgImageDark)

  return (
    <Parallax 
      strength={ 1000 }
      blur={{ min: -100, max: 100 }}
      style={{
        width: "100vw",
        height: "auto",
      }}
/*       bgImageStyle={{
        width: "100vw",
        height: "150vh",
        objectFit: 'cover',
      }} */
      bgStyle={{ 
        width: "100vw",
        height: "150vh",
      }}
    /* Tag="section" {...bgImage} */
    >
      <Background 
        className='reactParallaxBG'
        bgStyle={{ 
          width: "100vw",
          height: "150vh",
        }}
        >
{/*         <Image
          src={parallaxBGImg}
          webp={parallaxBGImgWebp}
          alt="the Parallax image"
          style={{
            width: "100vw",
            height: "150vh",
            objectFit: 'cover',
            //filter: 'hue-rotate(270deg)',
          }}
        /> */}
        
        <GatsbyImage
          imgClassName='contrast-10'
          className="parallaxBGImgDark"
          image={bgImageDark} 
          alt="the Parallax image dark"
          imgStyle={{
            width: "100vw",
            height: "150vh",
            objectFit: 'cover',
            //filter: 'hue-rotate(270deg)',
          }}
        />
        <GatsbyImage
          //imgClassName='parallaxBGImgLight'
          className="parallaxBGImgLight"
          image={bgImageLight} 
          alt="the Parallax image light"

          imgStyle={{
            width: "100vw",
            height: "150vh",
            objectFit: 'cover',
            //filter: 'hue-rotate(270deg)',
          }}
        />

      </Background>
        {children}
    </Parallax>
  )
}

export default StyledAbout
