import {graphql, useStaticQuery} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styled from "styled-components"
import links from "/src/constants/links"
import quickNav from "/src/constants/quickNav"
import socials from "/src/constants/socials"
import Logo from "/src/images/logo.svg"

const FooterArea = styled.footer`
  margin: 40px 0 0;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`

const GridContainer = styled.div`
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 40px;
  }
`

const FooterMenu = styled.div`
  padding: 25px 20px 20px;
  border-bottom: 1px solid var(--border);
  @media (min-width: 769px) {
    border-bottom: none;
  }
  @media (min-width: 1000px){
    border-radius: var(--buttonBorderRadius);
    background: var(--background);
    box-shadow:  8px 8px 16px var(--neumorphismShadow),
                -8px -8px 16px var(--neumorphizmLight);
    border: none;
  }

  ul {
    list-style: none;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    margin: 0;
  }
  li {
    margin: auto;
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;
    width: fit-content;
    &:last-child {
      padding-bottom: 5px;
      &::after {
        bottom: 4px;
      }
    }
    &:first-child{
      grid-column: 1 / 2;
    }
    &:nth-child(2n){
      grid-column: 2 / 3;
    }
    &:nth-child(2n-1){
      grid-column: 1 / 2;
    }
    &:last-child{
      grid-column: 2 / 3;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      left: 0;
      right: 0;
      bottom: 8px;
      background-color: var(--primary);
      width: 0;
      transition: width 0.5s;
    }
    &:hover{
      &:after{
        width: 100%;
        transition: width 0.5s;
      }
    }

    @media (min-width: 1200px) {
      font-size: var(--menuItem);
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

const NavLogo = styled.div`
  font-family: 'Heebo','Noto Sans JP' , sans-serif;
  font-size: 1rem;
  font-weight: 900;
  flex-shrink: 0;
  letter-spacing: -0.5px;
  z-index: 2;
  width: fit-content;
  margin: auto;
  @media (min-width: 1000px){
    margin: 0;
  }
  @media (min-width: 1200px) {
    font-size: 1rem;
  }
  ul{
    li{
      padding: 0;
    }
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
    span{
    }
    @media (hover: hover) {
      &:hover {
        color: var(--primary);
      }
    }
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 0.875rem;
  width: 100%;
  border-top: 1px solid var(--border);

  a {
    text-decoration: none;
    color: var(--primary);
  }

  @media (min-width: 769px) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
`

const StyledSocialIcons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  ul{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    li{
      margin: 0 10px 0;
      &::after{
        display: none;
      }
      a{
        img{
          width: 25px;
          
        }
      }
    }
  }
`

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <FooterArea>
        <GridContainer className="container">
        <FooterMenu>
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
          <StyledSocialIcons>
            <ul>
              {socials.map((item, index) => {
                  return (
                    <li key={index} >
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={item.iconLight} alt={`a lightmode ${item.title
                        } icon`} className = 'icon-light-mode'/>
                        <img src={item.iconDark} alt={`a darkmode ${item.title
                        } icon`} className = 'icon-dark-mode'/>
                      </a>
                    </li>
                  )
                })}
            </ul>
          </StyledSocialIcons>
        </FooterMenu>
          <FooterMenu>
            <ul>
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <AniLink cover bg="#1d1d1d" to={item.path}>
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
                    >
                      {item.text}
                    </AniLink>
                  </li>
                )
              })}
            </ul>
          </FooterMenu>
          <FooterMenu>
            <ul>
              {socials.map((item, index) => {
                return (
                  <li key={index} >
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </FooterMenu>
          <Copyright>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMetadata.author}
            </a>
          </Copyright>
        </GridContainer>
      </FooterArea>
    </>
  )
}

export default Footer
