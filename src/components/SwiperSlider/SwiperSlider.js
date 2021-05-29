import {GatsbyImage} from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from 'react';
import styled from 'styled-components';
import SwiperCore, {A11y, Autoplay, EffectCoverflow, EffectCube, EffectFade, EffectFlip, Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/components/navigation/navigation.min.css';
//import 'swiper/components/effect-fade/effect-fade.min.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade,EffectCoverflow, EffectFlip, EffectCube , Autoplay]);

const SwiperSlider = ({ images }) => {

	return (
		<> {
				images && images.length > 0 && ( 
					<StyledSwiperSliderWrapper>
					<Swiper 
						effect="coverflow"
						//centeredSlides="true"
						//loop="ture"
						breakpoints = {{
							1000: {
								spaceBetween: 100, 
							}
						}}
						spaceBetween = { 0 }
						slidesPerView = { 1 }
						speed={ 1000 }
						/* autoplay = { {
							delay: 5000
						} } */
						navigation
						navigation = {{
							//prevEl: '.buttonPrev',
              //nextEl: '.buttonNext',
						}} 
						pagination = { {
								clickable: true,
								//el: ".swiperPagination"
								
							} }
						scrollbar = { {
								draggable: true,
								//el: ".swiper-scrollbar"
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
									{/* <StyledImageOverlay></StyledImageOverlay> */}
									<StyledSwperSliderImage
										key={sliderImage.workImageId + '-' + i}
                    >
                    <GatsbyImage 
                      image={sliderImage.gatsbyImageData} 
                      className = 'swiperSliderImage'
                      alt = {
                        sliderImage.description ? sliderImage.description : sliderImage.title
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
  //margin: 40px 0 40px;
  position: relative;
	//color: var(--secondary);
	.swiper-wrapper{
		width: 100%;
	}
  .swiper-pagination-bullets{
		display: flex;
		justify-content:center;
		margin: 0 0 10px;
	}
	.swiper-pagination-bullet{
		box-sizing: content-box;
		border: 2px solid rgba(0,0,0,0);
	} 
	.swiper-pagination-bullet-active{
		background: rgba(0,0,0,0);
		border: 2px solid var(--parallaxBG);
		
	}
	.swiper-button-prev{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 10px;
		margin: auto 0;
		background: var(--textColor);
    border-radius: 50%;
		display: flex;
		justify-content:center;
		align-items: center;
		width: 25px;
		height: 25px;		
		@media(min-width: 769px){
			width: 35px;
			height: 35px;
		}
		&::after{
			position: relative;
			right: 1px;
			font-weight: bold; 
			color: var(--background);
			font-size: 10px;
			@media(min-width: 769px){
				font-size: 14px;
			}
		}
	}
	.swiper-button-next{
		position: absolute;
		top: 0;
		bottom: 0;
		right: 10px;
		margin: auto 0;
		background: var(--textColor);
    border-radius: 50%;
		width: 25px;
		height: 25px;		
		@media(min-width: 769px){
			width: 35px;
			height: 35px;
		}
		&::after{
			position: relative;
			left: 1px;
			font-weight: bold;
			color: var(--background);
			font-size: 10px;
			@media(min-width: 769px){
				font-size: 14px;
			}
		}
	}
`

const StyledSwperSliderImage = styled.div`
	.swiperSliderImage{
		margin: auto;
		//アスペクト比固定用
		//width: 75vw;
		//height: calc(75vw * 0.5625);
		min-width: 300px;
		min-height: 169px;
		position: relative;
		overflow: hidden;
		z-index: 1;
		@media (min-width: 769px){
			width: 100%;
			//height: 500px;
		}
		//filter: hue-rotate(170deg);
    //-webkit-filter: hue-rotate(170deg);
		
		img{
			margin: auto;
			width: 100%;
			height: 100%;
			//aspect-ratio: 16 / 9;
			//height: 500px;
			//max-height: 400px;
			object-fit: cover;
			object-position: 50% 0;
			
		}
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
	opacity: 0;
	z-index: 2;
`
export default SwiperSlider