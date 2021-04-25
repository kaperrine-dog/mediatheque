import "@fontsource/noto-sans-jp"
import React from "react"
import {createGlobalStyle} from "styled-components"
import "typeface-heebo"
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"

const GlobalStyle = createGlobalStyle`
:root {
  --background: rgba(3, 3, 30, 0.99);
  --headerBG: rgba(35, 35, 35, 0.6);
  --border: #313131;
  --primary: #029a9e;
  --inActive: #505050;
  --textColor: #fff;
  --parallaxBG: rgba(0,0, 0, 0.5);
  --worksPanelBG: rgba(55,55,55,0.9);
  --blogPanelBG: rgba(55,55,55,0.9);
  --servicesPanelBG: rgba(50,50,50,0.85);
  --menuItem: 1.125rem;
  --transition: 0.3s;
  --h1: 2rem;
  --h2: 1.375rem;
  --paddingBorder: 1.875rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;
  

  @media(min-width:768px) {
    --h1: 2.375rem;
    --h2: 1.625rem;
    --paddingStd: 4.688rem;
    --paddingLarge: 7.813rem;
  }
  @media(min-width: 1200px) {
    --menuItem: 1.25rem;
    --h1: 3.125rem;
    --h2: 1.75rem;
    --paddingStd: 5.625rem;
    --paddingLarge: 9.375rem;
  }
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
  --background: rgba(241, 241, 241, 1);
  --headerBG: rgba(206, 208, 218, 0.60);
  --border: #313131;
  --primary: rgba(94, 2, 158, 0.92);
  --inActive: #505050;
  --textColor: rgba(30, 30, 30, 1);
  --parallaxBG: rgba(207, 168, 149, 0.48);
  --worksPanelBG: rgba(255,255,255,0.65);
  --blogPanelBG: rgba(255,255,255,0.65);
  --servicesPanelBG: rgba(255,255,255,0.85);
}

h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.25em;

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

a.btn,
button.btn {
    color: var(--text-color);
    background-color: transparent;
    font-family: 'Heebo', sans-serif;
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
    }

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
    max-width: 1200px;
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
