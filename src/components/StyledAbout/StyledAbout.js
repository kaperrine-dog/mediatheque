import {graphql, useStaticQuery} from "gatsby";
import React from "react";
//import Image from "react-image-webp";
import {Background, Parallax} from 'react-parallax';
import parallaxBGImg from "../../images/jellyfish01.jpg";
import parallaxBGImgWebp from "../../images/jellyfish01.webp";
import parallaxBGImgLight from "../../images/white-abstract.jpg";
import parallaxBGImgLightWebp from "../../images/white-abstract.webp";


const StyledAbout = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jellyfish01.jpg" }) {
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

  //const image = getImage(placeholderImage)
  //const bgImage = convertToBgImage(image)
  //console.log(DarkMode)
  //console.log(image)
  //console.log(bgImage)
  
  return (
    <Parallax 
      strength={ 1000 }
      blur={{ min: -100, max: 100 }}
      //bgImage={parallaxBGImg}
      bgImageAlt="the parallax-bg"
      style={{
        width: "100vw",
        height: "auto",
      }}
      bgImageStyle={{
        width: "100vw",
        height: "150vh",
        objectFit: 'cover',
      }}
    /* Tag="section" {...bgImage} */
    >
      <Background 
        style={{ 
          width: "100vw",
          height: "150vh"
          //backgroundColor: "rgba(0,0,0,0.5)" 
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
        <picture>
          <source
            type='image/webp'
            srcSet={parallaxBGImgWebp}
          />
          <img 
            className='contrast-10 parallaxBGImgDark'
            id="parallaxBGImg"
            src={parallaxBGImg} 
            alt="the Parallax image"
            style={{
              width: "100vw",
              height: "150vh",
              objectFit: 'cover',
              //filter: 'hue-rotate(270deg)',
            }}
          />
        </picture>
        <picture>
          <source
            type='image/webp'
            srcSet={parallaxBGImgLightWebp}
          />
          <img 
            id='parallaxBGImgLight'
            className="parallaxBGImgLight"
            src={parallaxBGImgLight} 
            alt="the Parallax image"
            style={{
              width: "100vw",
              height: "150vh",
              objectFit: 'cover',
              //filter: 'hue-rotate(270deg)',
            }}
          />
        </picture>
      </Background>
          {children}
    </Parallax>
  )
}

export default StyledAbout
