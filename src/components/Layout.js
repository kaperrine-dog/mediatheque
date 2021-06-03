import "@fontsource/noto-sans-jp"
import "prismjs/themes/prism-tomorrow.css"
import React from "react"
import {createGlobalStyle} from "styled-components"
import "typeface-heebo"
import "typeface-lato"
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"
const sitekey = process.env.RECAPTCHA_SITE_KEY;


const GlobalStyle = createGlobalStyle`
:root {
  --menuItem: 1.125rem;
  --tags: 0.75rem;
  --transition: 0.3s;
  --heroH1: 5rem;
  --h1: 1.5rem;
  --h2: 1.375rem;
  --paddingBorder: 1.575rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;
  --itemCardBorderRadius: 20px;
  --buttonBorderRadius: 20px;
  --itemCardH2Title: 18px;
  --itemCardH2LineHeight: 1.25em;
  --itemCardH2Height: 2.25em;
  --textFontSizeLv1: 16px;
  --textLineHeightLv1: 1.5em;
  --textLetterSpacingLv1: 0.125em;
  --textLetterSpacingLv2: 0.025em;
  --marginBorder: 40px;
  --marginSmall: 20px;
  --marginStd: 40px;
  --marginLarge: 60px;
  --btnSmallFontSize:14px;
  --tagBtnFontSize: 12px;

  @media(min-width:768px) {
    --h1: 1.75rem;
    --h2: 1.325rem;
    --h3: 1.00rem;
    --paddingStd: 3.688rem;
    --paddingLarge: 7.813rem;
    --heroH1: 10vw;
  }
  @media(min-width: 1200px) {
    --menuItem: 1.25rem;
    --h1: 1.75rem;
    --h2: 1.50rem;
    --h3: 1.00rem;
    --paddingStd: 4.625rem;
    --paddingBorder: 3.875rem;
    --paddingLarge: 9.375rem;
    --heroH1: 10vw;
    --btnSmallFontSize:16px;
  }
  @media(min-width: 1400px){
    --heroH1: 140px;
  }
  //LightMode
  --background: rgba(241, 241, 241, 1);
  --titleTextShadow: rgba(135, 135, 135, 0.5);
  --headerBG: rgba(206, 208, 218, 0.10);
  --navMenuBG: rgba(240,240,240,0.7);
  --formBG: rgba(218, 218, 218, 49%);
  --formValidationColor: rgba(255, 101, 100, 0.9);
  --border: #313131;
  --primary: rgba(125, 111, 161, 0.92);
  --secondary: rgba(22, 25, 157, 0.98);
  --inActive: #505050;
  --textColor: rgba(30, 30, 30, 1);
  --parallaxBG: rgba(255, 255, 255, 0.425);
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
  --neumorphismShadowSmall: #7b7b7b;
}
* {
  box-sizing: border-box;
}  

body {
    font-family: "lato",'Heebo','Noto Sans JP', 'Helvetica' ,sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--textColor);
  }

.icon-dark-mode{
  display: none;
}
.icon-light-mode{
  display: initial;
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
  .icon-dark-mode{
    display: initial;
  }
  .icon-light-mode{
    display: none;
  }
}


h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.25em;
  letter-spacing: 0.025em;
  letter-spacing: var(--textLetterSpacingLv2);
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
p{
  letter-spacing: var(--textLetterSpacingLv1);
  line-height: var(--textLineHeightLv1);
  font-weight: 400;
  font-size: var(--textFontSizeLv1);
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: justify;
}
span, div{
  letter-spacing: 0.025em;
}
a{
  color: var(--text-color);
  background-color: transparent;
  font-family: 'lato', 'Heebo','Noto Sans JP' , sans-serif;
  border: 0;
  text-decoration: none;
  padding: 0;
  transition: var(--transition) color;
  letter-spacing: var(--textLetterSpacingLv2);
  font-size: 400;
  &:hover{
  }
}
a.btn,button.btn {
    color: var(--text-color);
    background-color: transparent;
    font-family: 'lato', 'Heebo','Noto Sans JP' , sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    font-size: var(--menuItem);
    font-weight: 900;
    position: relative;
    padding: 0.5em 1.25em 0.75em;
    align-self: flex-start;
    letter-spacing: var(--textLetterSpacingLv2);
    border-radius: var(--buttonBorderRadius);
    //background: var(--background);
    box-shadow:  8px 8px 16px var(--neumorphismShadow),
                -8px -8px 16px var(--neumorphizmLight);
    &:focus {
      color: var(--primary);
    }
    @media(hover: hover) {
      cursor: pointer;
      opacity: 0.9;
    }
    &:active{
      box-shadow: 2px 2px 4px var(--neumorphismShadow), 
                  -4px -4px 16px var(--neumorphizmLight);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      left: 0;
      right: 0;
      bottom: 10px;
      background-color: var(--primary);
      margin: 0 auto;
      width: 0%;
      transition: all 0.5s;
    }
    &:hover{
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        bottom: 10px;
        background-color: var(--primary);
        margin: 0 auto;
        width: 70%;
        transition: all 0.5s;
      }
    }
  }
  .btnSolid{
    color: var(--text-color);
    background-color: transparent;
    font-family: 'lato', 'Heebo','Noto Sans JP' , sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: var(--textLetterSpacingLv2);
    position: relative;
    padding: 0.5em 1.25em 0.75em;
    align-self: flex-start;
    &:focus {
      color: var(--primary);
    }
    border-radius: var(--buttonBorderRadius);
    //background: var(--background);
    box-shadow:  8px 8px 16px var(--neumorphismShadow),
                -8px -8px 16px var(--neumorphizmLight);
    @media(hover: hover) {
      cursor: pointer;
    }
    &:active{
      box-shadow: 2px 2px 4px var(--neumorphismShadow), 
                  -4px -4px 16px var(--neumorphizmLight);
    }
  }

  .btnEmbed{
    color: var(--text-color);
    background-color: transparent;
    font-family: 'lato', 'Heebo','Noto Sans JP' , sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    //text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: var(--textLetterSpacingLv2);
    position: relative;
    align-self: flex-start;
    &:focus {
      color: var(--primary);
    }
    @media(hover: hover) {
      cursor: pointer;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      left: 0;
      right: 0;
      bottom: -0.25em;
      background-color: var(--primary);
      margin: 0 auto;
      width: 0%;
      transition: all 0.5s;
    }
    &:hover{
      &:after{
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        bottom: -0.25em;
        background-color: var(--primary);
        margin: 0 auto;
        width: 100%;
        transition: all 0.5s;
      }
    }
  }

  .btnEmbedSolid{
    color: var(--text-color);
    background-color: transparent;
    font-family: 'lato', 'Heebo','Noto Sans JP' , sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    //text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: var(--textLetterSpacingLv2);
    position: relative;
    align-self: flex-start;
    &:focus {
      color: var(--primary);
    }
    @media(hover: hover) {
      cursor: pointer;
    }
  }

  .btnImage{
    color: var(--text-color);
    background-color: transparent;
    font-family: 'lato', 'Heebo','Noto Sans JP' , sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: var(--textLetterSpacingLv2);
    position: relative;
    align-self: flex-start;
    &:focus {
      color: var(--primary);
    }
    border-radius: var(--buttonBorderRadius);
    //background: var(--background);
    box-shadow:  8px 8px 16px var(--neumorphismShadow),
                -8px -8px 16px var(--neumorphizmLight);
    @media(hover: hover) {
      cursor: pointer;
    }
    &:active{
      box-shadow: 2px 2px 4px var(--neumorphismShadow), 
                  -4px -4px 16px var(--neumorphizmLight);
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

  .btnSmall{
    word-break: keep-all;
    color: var(--text-color);
    background-color: transparent;
    font-family: 'lato', 'Heebo','Noto Sans JP' , sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;
    font-size: var(--tags);
    font-weight: 900;
    position: relative;
    padding: 0.5em 1.25em 0.75em;
    margin: 0em 0.5em 1em;
    align-self: flex-start;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    letter-spacing: var(--textLetterSpacingLv1);
    border-radius: 8px;
    //border-radius: var(--buttonBorderRadius);
    //background: var(--background);
    box-shadow:  2px 2px 8px var(--neumorphismShadow),
                -2px -2px 8px var(--neumorphizmLight);
    &:focus {
      color: var(--primary);
    }
    @media(hover: hover) {
      cursor: pointer;
      opacity: 0.9;
    }
    &:active{
      box-shadow: 2px 2px 4px var(--neumorphismShadow), 
                  -4px -4px 16px var(--neumorphizmLight);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      left: 0;
      right: 0;
      bottom: 4px;
      background-color: var(--primary);
      margin: 0 auto;
      width: 0%;
      transition: all 0.5s;
    }
    &:hover{
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: 1px;
        left: 0;
        right: 0;
        bottom: 4px;
        background-color: var(--primary);
        margin: 0 auto;
        width: 60%;
        transition: all 0.5s;
      }
    }
  }

  .btnDisable{
    background-color: rgba(123, 123, 123, 0.8)!important;
    color: rgba(100,100,100,0.8)!important;
    &:active{
      box-shadow: initial;
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

  .gatsby-code-title {
    display: block;
    position: relative;
    background: #272822;
    width: 100%;
    top: 10px;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
    span {
      display: inline;
      position: relative;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      color: #eee;
      background: #777;
      border-top-left-radius: 0.3em;
      border-bottom-right-radius: 0.3em;
      padding: 3px;
      top: 1px;
    }
  }

  .neumorphizmLarge{
    border-radius: var(--itemCardBorderRadius);
    background: var(--background);
    box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);
    &:active{
      box-shadow: -10px 10px 20px var(--neumorphismShadow),
                  10px -10px 20px var(--neumorphizmLight);
    }

  }
  .neumorphizm{
    border-radius: var(--buttonBorderRadius);
    background: var(--background);
    box-shadow:  8px 8px 16px var(--neumorphismShadow),
                -8px -8px 16px var(--neumorphizmLight);
    &:active{
      box-shadow: 2px 2px 4px var(--neumorphismShadow), 
                  -4px -4px 16px var(--neumorphizmLight);
    }
  }

  .glass-container{
    width: 100%;
    height: 100%;
    color: var(--textColor);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: var(--itemCardBorderRadius);
    backdrop-filter: blur(5px);
    background-color: rgba(219,246,255, 0.075);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
  }
  .glass-morphizm{
    padding: 20px;
    border-radius: var(--itemCardBorderRadius);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: rgba(219,246,255,0.075);
    box-shadow: rgb(0 0 0 / 30%) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
  }

  .imageWindow{
    //on GatsbyImage Components in the panel or cards
    border-bottom: 3px solid var(--primary);
    border-left: 1px solid var(--primary);
    border-right: 2px solid var(--primary);
    border-top: 1px solid var(--primary);
    border-radius: var(--itemCardBorderRadius);
  }

  .contentIntroduction{
    font-size: var(--textFontSizeLv1);
    line-height: var(--textLineHeightLv1);
    letter-spacing: var(--textLetterSpacingLv1);
    span{
      letter-spacing: var(--textLetterSpacingLv1);
    }
  }
  

  //contentful childMarkdownRemark.html styles
  .contentArticle{
    pre{
      border-radius: 0.3em;
    }
    --contentArticleH1FontSize: 20px;
    padding: 2rem 20px 2rem 5px;
    @media (min-width: 769px){
      --contentArticleH1FontSize: 24px;
      padding: 2rem 1rem;
    }
    margin: 0 0 40px;
    background: var(--navMenuBG);
    border-radius: var(--buttonBorderRadius);
    //background: var(--background);
    box-shadow:  8px 8px 16px var(--neumorphismShadow),
                -8px -8px 16px var(--neumorphizmLight);
    h1 {
      letter-spacing: var(--textLetterSpacingLv1);
      font-size: var(--contentArticleH1FontSize);
      font-weight: 900;
      margin: 80px 0 60px;
      position: relative;
      padding: 0.125em 1.5em 0.25em;
      //border-top: solid 1px var(--textColor);
      border-bottom: solid 1px var(--primary);
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 1em;
        width: 1px;
        height: calc(100% + 1em);
        background-color: var(--primary);
      }
      &:after {
        position: absolute;
        content: "";
        left: 0.7em;
        top: 1.35em;
        width: 0.5em;
        height: 0.5em;
        border: 1px solid var(--primary);
        background: transparent;
        border-radius: 50%;
        transform: rotate( 45deg );
      }
    }
    p,h2,h3,h4,h5{
      letter-spacing: var(--textLetterSpacingLv1);
      margin: 20px calc(var(--contentArticleH1FontSize) / 2) 20px;
      @media (min-width: 1200px){
        margin: 40px 0 40px var(--contentArticleH1FontSize);
      }
    }
    h2{
      font-size: calc( var(--contentArticleH1FontSize) - 2px );
      font-weight: 900;
      margin: 80px 0 40px 1.5em;
      position: relative;
      padding: 0.125em 0.5em 0.25em;
      //border-top: solid 1px var(--textColor);
      border-bottom: solid 1px var(--primary);
      &:after {
        position: absolute;
        content: "";
        left: -0.3em;
        bottom: -0.125em;
        width: 0.25em;
        height: 0.25em;
        border: 1px solid var(--primary);
        background: transparent;
        border-radius: 50%;
        transform: rotate( 45deg );
      }
    }
    h3{
      font-weight: 900;
      font-size: calc( var(--contentArticleH1FontSize) - 4px );
      margin: 80px 0 40px 1.5em;
      position: relative;
      padding: 0.125em 0.5em 0.25em;
      //border-top: solid 1px var(--textColor);
      border-bottom: solid 1px var(--primary);
    }
    h4{
      font-weight: 900;
      font-size: calc( var(--contentArticleH1FontSize) - 6px );
    }
    p{
      font-size: var(--textFontSizeLv1);
      line-height: var(--textLineHeightLv1);
      letter-spacing: var(--textLetterSpacingLv1);
      span{
        letter-spacing: var(--textLetterSpacingLv1);
      }
    }
    span{
      letter-spacing: var(--textLetterSpacingLv1);
      }
    ul,ol{
      letter-spacing: var(--textLetterSpacingLv1);
      font-size: 16px;
      padding: 0 0 0 20px;
      margin: 20px 0 20px calc(var(--contentArticleH1FontSize) / 2);
      @media (min-width: 769px){
        padding: 0 0 0 20px;
        margin: 40px 0 40px 20px;
      }
    }
    li{
      letter-spacing: var(--textLetterSpacingLv1);
      padding: 0;
      margin: 0;
      p{
        margin: 0;
        padding: 0;
      }
    }
    a{
      width: 100%;
      color: var(--primary);
      text-decoration:none;
      &:hover{
        text-decoration: underline;
      }
    }
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
