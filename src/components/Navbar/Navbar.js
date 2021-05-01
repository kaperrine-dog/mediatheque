import {graphql, useStaticQuery} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, {useState} from "react"
import styled from "styled-components"
import links from "../../constants/links"
import quickNav from "../../constants/quickNav"
import Logo from "../../images/logo.svg"
import DarkMode from "../DarkMode/DarkMode"
//import BackgroundImage from 'gatsby-background-image'

const NavBar = styled.nav`
  padding: 0.5rem 1.875rem;
  position: fixed;
  width: 100%;
  z-index: 5;
  border-bottom: 1px solid var(--border);
  background-color: var(--headerBG);
  @media (min-width: 1000px){
    border: none;
  }
`

const NavButton = styled.button`
  position: relative;
  color: var(--text-color);
  padding: 12px 0 17px 0;
  order: 1;
  border: none;
  background-color: transparent;
  font-size: var(--menuItem);
  font-weight: 900;
  letter-spacing: -1px;
  z-index: 10;
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 10px;
    background-color: var(--primary);
  }

  @media (min-width: 769px) {
    display: none !important;
  }
`

const NavLogo = styled.div`
  font-size: 1rem;
  font-weight: 900;
  flex-shrink: 0;
  letter-spacing: -0.5px;
  padding: 7px 0;
  z-index: 2;
  border-bottom: 1px solid var(--border);
  width: 60%;
  @media (max-width: 768x){
  }
  @media (min-width: 1000px){
    width: auto;
    border: none;
  }
  @media (min-width: 1200px) {
    font-size: 1rem;
    padding: 12px 0;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    img{
      width: 35px;
      margin-right: 1rem;
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
  @media (max-width: 768x){
    
  }
  @media (min-width: 1000px){
    width: 85px;
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
  li {
    text-align: center;
    font-size: 1.5rem;
    margin-right: 1rem;
    list-style: none;
    padding: 18px 0 15px;

    a {
      color: var(--text-color);
      transition: var(--transition);
      display: flex;
      align-items: center;
      &:hover {
        color: var(--primary);
      }
    }

    &:nth-child(2) {
      margin-right: 0;
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
  max-width: 500px;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-in, transform 0.5s ease-in,
  visibility var(--transition) ease-in;

  @media (min-width: 769px) {
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
    justify-content: center;
    padding: 0;
    margin: 0;

    @media (min-width: 769px) {
      flex-direction: row;
    }
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;

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

    @media (min-width: 769px) {
      padding-top: 10px;
      padding-bottom: 18px;
      margin-right: 15px;
      margin-bottom: 0;

      &::after {
        bottom: 17px;
      }
    }

    @media (min-width: 1200px) {
      padding-top: 15px;
      padding-bottom: 20px;
      margin-right: 25px;

      &::after {
        bottom: 17px;
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
  height: 125px;

  @media (min-width: 769px) {
    height: 125px;
  }
  @media (min-width: 1000px) {
    height: 65px;
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
          <NavButton type="button" onClick={toggleNav}>
            Menu.
          </NavButton>
          
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
                    <AniLink cover bg="var(--headerBG)" to={item.path}>
                      {item.text}
                    </AniLink>
                  </li>
                )
              })}
            </ul>
          </NavLinks>
          <NavSocials>
            {quickNav.map((item, index) => {
              return (
                <li key={index}>
                  <AniLink cover bg="var(--headerBG)" to={item.path}>
                    {item.icon}
                  </AniLink>
                </li>
              )
            })}
          </NavSocials>
        </NavCenter>
      </NavBar>
      <Spacer />
    </>
  )
}

export default Navbar
