import {graphql, useStaticQuery} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, {useState} from "react"
import styled from "styled-components"
import DarkMode from "../DarkMode/DarkMode"
import links from "/src/constants/links"
import quickNav from "/src/constants/quickNav"
import Logo from "/src/images/logo.svg"
//import BackgroundImage from 'gatsby-background-image'

const NavBar = styled.nav`
  padding: 0.5rem 1.875rem 0.75em;
  position: fixed;
  width: 100%;
  z-index: 5;
  //border-bottom: 1px solid var(--border);
  //background-color: var(--headerBG);
  border-radius: var(--itemCardBorderRadius) var(--itemCardBorderRadius);
  background: var(--background);
  box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);
  @media (min-width: 1000px){
    border: none;
  }
`

const StyledNavButton = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 10;
  button{
    padding: 0;
    background: none;
    position: absolute;
    width: 30px;
    height: 30px;
    border: none;
    z-index: 10;
    display: block;
    position: absolute;
    top: 7px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
/*     
    color: var(--text-color);
    //padding: 12px 0 17px 0;
    order: 1;
    background-color: transparent;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -1px;
    z-index: 10; */

    p{
      position: absolute;
      top: 0px;
      width: 0px;
      text-align: center;
      left: 0px;
      color: var(--textColor);
    }
  }
  .bento-menu{
    position: absolute;
    width: 25px;
    height: 25px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: var(--text-color);
    //padding: 12px 0 17px 0;
    order: 1;
    border: none;
    background-color: transparent;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -1px;
    z-index: 10;
    transform: rotateZ( 0 );
    transition: 0.6s;
    span{
      width: 6px;
      height: 6px;
      border-radius: 0%;
      background: var(--primary);
      position: absolute;
      &:nth-child(1){
        top: 0;
        left: 0;
        transition: .6s ease-in-out;
      }
      &:nth-child(2){
        top: 0;
          left: 9px;
          transition: .6s ease-in-out;
      }
      &:nth-child(3){
        top: 0;
        left:18px;
        transition: .6s ease-in-out;
      }
      &:nth-child(4){
        top: 9px;
        left: 0;
        transition: .6s ease-in-out;
      }
      &:nth-child(5){
        top: 9px;
        left: 9px;
        transition: .6s ease-in-out;
      }
      &:nth-child(6){
        top: 9px;
        left:18px;
        transition: .6s ease-in-out;
      }
      &:nth-child(7){
        top: 18px;
        left: 0;
        transition: .6s ease-in-out;
      }
      &:nth-child(8){
        top: 18px;
        left: 9px;
        transition: .6s ease-in-out;
      }
      &:nth-child(9){
        top: 18px;
        left:18px;
        transition: .6s ease-in-out;
      }
    }
  }
  .isOpen{
    //transform: scale( 1.125, 1.125 );
    .bento-menu{
      transform: rotateZ( 1.625turn );
      top: 0;
      span{
        border-radius: 0%;
        &:nth-child(1){
          transform: translate(9px,9px);
        }
        &:nth-child(3){
          transform: translate(-9px,9px);
        }
        &:nth-child(7){
          transform: translate(9px,-9px);
        }
        &:nth-child(9){
          transform: translate(-9px,-9px);
        }
        &:nth-child(2n+1){
          opacity: 0;
        }
        &:nth-child(2){
          width: 12px;
          height: 3px;
          //transform: rotate(180deg);
          transform: rotate(90deg);
        }
        &:nth-child(4){
          width: 12px;
          height: 3px;
          transform: rotate(180deg);
        }
        &:nth-child(6){
          width: 12px;
          height: 3px;
          transform: rotate(-180deg);
        }
        &:nth-child(8){
          width: 12px;
          height: 3px;
          //transform: rotate(-180deg);
          transform: rotate(90deg);
        }

      }
    }
  }
    
  @media (min-width: 769px) {
    display: none !important;
  }
`

const NavLogo = styled.div`
  font-family: 'Heebo','Noto Sans JP' , sans-serif;
  font-size: 1rem;
  font-weight: 900;
  flex-shrink: 0;
  letter-spacing: -0.5px;
  z-index: 2;
  border-bottom: 1px solid var(--border);
  width: 60%;
  
  @media (min-width: 1000px){
    padding: 7px 0.75em;
    border: none;
    border-radius: var(--buttonBorderRadius);
    background: var(--background);
    box-shadow:  8px 8px 16px var(--neumorphismShadow),
                -8px -8px 16px var(--neumorphizmLight)  ;
    width: auto;
    border: none;
  }
  @media (min-width: 1200px) {
    font-size: 1rem;
    padding: 12px 0.75em;
  }

  a {
    padding: 5px 0;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    img{
      width: 35px;
      margin-right: 0.25em;
      cursor: pointer;
    }
    @media (hover: hover) {
      &:hover {
        color: var(--primary);
      }
    }
  }
`

const ThemeSwitch = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 1px solid var(--border);
  z-index: 2;
  width: 40%;
  //background: var(--itemPanelBGDark);
  
  @media (min-width: 769px){
    
  }
  @media (min-width: 1000px){
    align-items: center;
    border-radius: var(--buttonBorderRadius);
    background: var(--background);
    box-shadow:  8px 8px 16px var(--neumorphismShadow),
                -8px -8px 16px var(--neumorphizmLight);
    width: 135px;
    border: none;
    order: 3;
  }
`

const NavCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
`

const NavSocials = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 1.875rem;
  order: 2;
  z-index: 2;
  justify-content: flex-end;
  
  @media (min-width: 1000px){
    width: auto;
    position: absolute;
    right: 160px;
    bottom: 0px;
    height: 100%;
  }
  @media (min-width: 1200px){
    width: 35%;
    position: static;
    right: auto;
  }
  ul{
    margin: 0;
    width: 115px;
    display: flex;
    cursor: auto;
    @media (min-width:769px){

    }
    @media (min-width: 1000px){
      margin: 0 1em;
      justify-content: center;
      align-items:center;
      padding: 14px 1.0em 16px;
      border-radius: var(--buttonBorderRadius);
      background: var(--background);
      box-shadow:  8px 8px 16px var(--neumorphismShadow),
                  -8px -8px 16px var(--neumorphizmLight);
      &:active{
        box-shadow: 2px 2px 4px var(--neumorphismShadow), 
                    -4px -4px 16px var(--neumorphizmLight);
      }
    }
    @media (min-width: 1200px){
      padding: 17px 15px 17px;
    }
    li {
      text-align: center;
      font-size: 1.5rem;
      //margin-right: 1rem;
      list-style: none;
      padding: 0;
      a {
        color: var(--text-color);
        transition: var(--transition);
        display: flex;
        align-items: center;
        &:hover {
          color: var(--primary);
        }
      }
      &:nth-child(n){
        margin: 0 0.5em 0;
      }
      &:first-child{
        margin: 0 0.5em 0 0;
      }
      &:last-child{
        margin: 0 0 0 0.5em;
      }
    }
  }
`

const NavLinks = styled.div`
  display: flex;
  align-content: center;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding: 0 1.875rem;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-in, transform 0.5s ease-in,
  visibility var(--transition) ease-in;

  @media (min-width: 769px) {
    width: auto;
    position: relative;
    top: auto;
    left: auto;
    transform: translate(0);
    height: auto;
    visibility: visible;
    opacity: 1;
    padding: 0;
  }
  @media (min-width: 1000px){
    width: auto;
    left: 190px;
    position: absolute;
  }
  @media (min-width: 1200px){
    width: 35%;
    position: static;
    left: auto;
  }

  &.show-nav {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    position: absolute;
    z-index: 9;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    margin: 0;
    padding: 0.5em 1.25em 0.75em;
    @media (min-width: 769px) {
      flex-direction: row;
      align-items: center;
    }
    @media (min-width: 1000px) {
      margin: 0 1em;
      padding: 12px 1.0em 12px;
      border-radius: var(--buttonBorderRadius);
      background: var(--background);
      box-shadow:  8px 8px 16px var(--neumorphismShadow),
                  -8px -8px 16px var(--neumorphizmLight);
    }
    @media (min-width: 1200px){
      padding: 15px 15px 18px;
    }
  }
  .navFixedPages{
    display: initial;
    @media (min-width: 769px){
      display: none;
    }
  }
  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 0px;
    margin: 10px 0;
    letter-spacing: 0.01em;
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      left: 0;
      right: 0;
      //bottom: 0;
      bottom: 0.25em;
      background-color: var(--primary);
      transition: width 0.4s;
      width: 0;
    }
    &:hover{
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        //bottom: 0;
        bottom: -0.25em;
        background-color: var(--primary);
        width: 100%;
        transition: width 0.4s;
    }
    }

    @media (min-width: 769px) {
      padding-top: 10px;
      padding-bottom: 18px;
      margin-right: 15px;
      margin-bottom: 0;
      margin: 0;
      padding: 0;
      &::after {
        bottom: -0.25em;
      }
      &:nth-child(n){
        margin: 0 0.5em 0;
      }
      &:first-child{
        margin: 0 0.5em 0;
      }
      &:last-child{
        margin: 0 0.5em 0;
      }
    }
    @media (min-width: 1000px){
      
    }
    @media (min-width: 1200px) {
      padding-top: 15px;
      padding-bottom: 20px;
      margin-right: 25px;
      margin: 0;
      padding: 0;
      &::after {
        bottom: -0.25em;
      }
    }
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;

    &:focus {
      color: var(--primary);
    }
  }

  @media (hover: hover) {
    a:hover {
      color: var(--primary);
    }
  }
`

const Spacer = styled.div`
  height: 80px;
  @media (min-width: 769px) {
    height: 115px;
  }
  @media (min-width: 1000px) {
    height: 80px;
  }
  @media (min-width: 1200px) {
    height: 80px;
  }
`


const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  
  const closeNav = () => {
    setNav(false)
  }
  
  React.useEffect(() => {
    
  })

  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar>
        <NavCenter>
          <NavLogo>
            <AniLink cover bg="var(--headerBG)" to="/">
              <img
                src={Logo}
                />
              <span>
                { siteMetadata.title }
              </span>
            </AniLink>
          </NavLogo>
          <ThemeSwitch> 
            <DarkMode /> 
          </ThemeSwitch>
          <StyledNavButton>
            <button
              onClick={toggleNav}
              className= { 
                isOpen ? `${"isOpen"}` : `${"isClose"}` }
              >
              <div className="bento-menu">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </StyledNavButton>
          
          <NavLinks
            className={
              isOpen ? `${"navbar-links"} ${"show-nav"}` : `${"navbar-links"}`
            }
            style={{backgroundColor: isOpen ? 'var(--navMenuBG)' : ''}}
          >
            <ul>
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <AniLink cover bg="var(--headerBG)" to={item.path}
                    onClick={closeNav}
                    >
                      {item.text}
                    </AniLink>
                  </li>
                )
              })}
              {quickNav.map((item, index) => {
                return (
                  <li 
                    className='navFixedPages'
                    key={`fixed_pages_${index}`}>
                    <AniLink cover bg="var(--headerBG)" to={item.path}
                    onClick={closeNav}
                    >
                      {item.text}
                    </AniLink>
                  </li>
                )
              })}
            </ul>
          </NavLinks>
          <NavSocials>
            <ul>
              {quickNav.map((item, index) => {
                return (
                  <li key={index}>
                    <AniLink cover bg="var(--headerBG)" to={item.path}
                    onClick={closeNav}
                    >
                      {item.icon}
                    </AniLink>
                  </li>
                )
              })}
            </ul>
          </NavSocials>
        </NavCenter>
      </NavBar>
      <Spacer />
    </>
  )
}

export default Navbar
