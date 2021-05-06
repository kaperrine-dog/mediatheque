import {GatsbyImage, getImage} from "gatsby-plugin-image";
//import {BgImage} from 'gbimage-bridge';
import React from "react";
//import Image from "react-image-webp";
import {Background, Parallax} from 'react-parallax';
import styled from 'styled-components';

const StyledGatsbyImage = styled.div`
  .gatsby-image-wrapper{
    img{
      position: absolute !important;
    }
  }
`

const StyledAbout = ({ imgLight, imgDark, children }) => {


  const bgImageLight = getImage(imgLight)
  const bgImageDark = getImage(imgDark)
  
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
        <StyledGatsbyImage>
          <GatsbyImage
            imgClassName='contrast-10'
            className="parallaxBGImgDark"
            image={bgImageDark} 
            alt="the Parallax image dark"
            imgStyle={{
              width: "100vw",
              height: "150vh",
              objectFit: 'cover',
              objectPosition: '50% 50%',
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
              //objectFit: 'cover',
              //objectPosition: '50% 50%',
              //filter: 'hue-rotate(270deg)',
            }}
          />
        </StyledGatsbyImage>
      </Background>
      {children}
    </Parallax>
  )
}

export default StyledAbout
