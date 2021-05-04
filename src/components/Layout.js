import "@fontsource/noto-sans-jp"
import React from "react"
import {createGlobalStyle} from "styled-components"
import "typeface-heebo"
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"

const GlobalStyle = createGlobalStyle`
:root {
  --menuItem: 1.125rem;
  --transition: 0.3s;
  --heroH1: 5rem;
  --h1: 2rem;
  --h2: 1.375rem;
  --paddingBorder: 1.875rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;
  --itemCardBorderRadius: 20px;

  @media(min-width:768px) {
    --h1: 2.375rem;
    --h2: 1.625rem;
    --h3: 1.00rem;
    --paddingStd: 3.688rem;
    --paddingLarge: 7.813rem;
    --heroH1: 10vw;
  }
  @media(min-width: 1200px) {
    --menuItem: 1.25rem;
    --h1: 2.125rem;
    --h2: 1.50rem;
    --h3: 1.00rem;
    --paddingStd: 4.625rem;
    --paddingLarge: 9.375rem;
    --heroH1: 10vw;
  }
  @media(min-width: 1400px){
    --heroH1: 140px;
  }
  //LightMode
  --background: rgba(241, 241, 241, 1);
  --titleTextShadow: rgba(135, 135, 135, 0.5);
  --headerBG: rgba(206, 208, 218, 0.60);
  --navMenuBG: rgba(240,240,240,0.5);
  --formBG: rgba(218, 218, 218, 49%);
  --formValidationColor: rgba(255, 101, 100, 0.9);
  --border: #313131;
  --primary: rgba(56, 29, 123, 0.92);
  --secondary: rgba(22, 25, 157, 0.98);
  --inActive: #505050;
  --textColor: rgba(30, 30, 30, 1);
  --parallaxBG: rgba(255, 255, 255, 0.25);
  --itemPanelBG: rgba(255,255,255,0.65);
  --servicesPanelBG: rgba(255,255,255,0.85);
  --itemCardShadow: rgba(1, 1, 1, 0.6);
  .parallaxBGImgDark{
    display: none;
  }
  .parallaxBGImgLight{
    display: initial;
  }
  --neumorphismShadow: #606060;
  --neumorphizmLight: rgba(255,255,255,0.99);
}
* {
  box-sizing: border-box;
}  

body {
    font-family: 'Heebo','Noto Sans JP', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--textColor);
  }

.light-mode{

}

.dark-mode{
  --background: rgba(3, 3, 30, 0.99);
  --titleTextShadow: rgba(202, 202, 202, 0.29);
  --headerBG: rgba(35, 35, 35, 0);
  --navMenuBG: rgba(84, 84, 84, 0.7);
  --formBG: rgba(228, 228, 228, 0.9);
  --formValidationColor: rgba(255, 157, 156, 0.9);
  --border: #313131;
  --primary: #029a9e;
  --secondary: rgba(190, 142, 0, 1);
  --inActive: #505050;
  --textColor: #fff;
  --parallaxBG: rgba(0,0, 0, 0.15);
  --itemPanelBGDark: rgba(30,30,50, 0.999);
  --servicesPanelBG: rgba(30,30,50, 0.999);
  --itemCardShadowDark: rgba(180, 180, 180, 0.5);
  .parallaxBGImgLight{
    display: none;
  }
  .parallaxBGImgDark{
    display: initial;
  }
  --neumorphismShadow: #606060;
  --neumorphizmLight: rgba(50, 50, 50, 0.99);
}


h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.25em;
  letter-spacing: 0.025em;
  @media(min-width: 1200px) {
    margin-bottom: 1.5rem;
  }
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--h1);
  font-weight: 900;
}
h2 {
  font-size: var(--h2);
  font-weight: 500;
}
span, div{
  letter-spacing: 0.025em;
}
p{
  line-height: 1.5em;
  letter-spacing: 0.025em;
  font-weight: 400;
  font-size: 16px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
a.btn,
button.btn {
    color: var(--text-color);
    background-color: transparent;
    font-family: 'Heebo','Noto Sans JP' , sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 8px;
      background-color: var(--primary);
      margin: 0 auto;
    }
    &:focus {
      color: var(--primary);
    }
    @media(hover: hover) {
      cursor: pointer;
      opacity: 0.9;
    }
  }
  
  .btnSolid{
    color: var(--text-color);
    background-color: transparent;
    font-family: 'Heebo','Noto Sans JP' , sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;
    &:focus {
      color: var(--primary);
    }
    @media(hover: hover) {
      cursor: pointer;
    }
  }

  @media (min-width: 1200px) {
      font-size: var(--menuItem);
    }

  @media (hover: hover) {
    a:hover {
      color: var(--primary);
    }
  }

  .container {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-padding {
    padding: var(--paddingStd) var(--paddingBorder);
  }
  
  .section-padding--large {
    padding: var(--paddingLarge) var(--paddingBorder);
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
        <Navbar />
          {children}
        <Footer />
    </>
  )
}

export default Layout
