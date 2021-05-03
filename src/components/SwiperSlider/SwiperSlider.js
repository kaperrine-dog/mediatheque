import {GatsbyImage} from "gatsby-plugin-image";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SwiperCore, {A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/components/effect-fade/effect-fade.min.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
/* 
export const query = graphql `
query($slug: String) {
    work: contentfulWorks(slug: { eq: $slug }) {
      name
      introduction
      description {
        description
      }
      accordion {
        title
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
        gatsbyImageData
        description
        title
        workImageId: contentful_id
      }
      url
    }
  }
` */

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

const SwiperSlider = ({images}) => {

	return (

		<> {
				images && images.length > 0 && ( 
					<StyledSwiperSliderWrapper>
					<Swiper 
						effect="fade"
						//loop="false"
						spaceBetween = { 0 }
						slidesPerView = { 1 }
						speed={ 1000 }
						autoplay = { {
								delay: 5000
							} }
						//navigation 
						pagination = { {
								clickable: true
							} }
						scrollbar = { {
								draggable: true
							}
						}
						onSwiper = { (swiper) => {
							console.log(swiper)
							} 
						}
						onSlideChange = { 
							() => {
								console.log('changed slides')
							}
						}
					>
					{
						images && (
							images.map((sliderImage, i) => {
								return ( 
								<SwiperSlide 
									className = "swiperSliderImageWrapper" 
									key={'SwiperSlide' + sliderImage.workImageId + '-' + i}
									>
									<StyledImageOverlay></StyledImageOverlay>
									<StyledSwperSliderImage
										key={sliderImage.workImageId + '-' + i}
                    >
                    <GatsbyImage 
                      image={sliderImage.gatsbyImageData} 
                      className = 'swiperSliderImage'
                      alt = {
                        sliderImage.title
                      }
                    />
                  </StyledSwperSliderImage>
									
								</SwiperSlide>)
								}))
						}
						</Swiper>
					</StyledSwiperSliderWrapper>
					)
				} 
			</>
			)
		}


SwiperSlider.propTypes = {
	images: PropTypes.array.isRequired
}

//StyledComponents

const StyledSwiperSliderWrapper = styled.div`
  position: relative;
	color: var(--tertiary);
`

const StyledSwperSliderImage = styled.div`
	.swiperSliderImage{
    width: 100vw;
    height: 70vh;
    object-fit: cover;
    object-position: center;
    filter: hue-rotate(170deg);
    -webkit-filter: hue-rotate(170deg);
    z-index: 1;
  }
`
const StyledImageOverlay = styled.div`
  width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0;
	background: var(--background);
	z-index: 2;
`
export default SwiperSlider