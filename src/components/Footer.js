import {graphql, useStaticQuery} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styled from "styled-components"
import links from "../constants/links"
import socials from "../constants/socials"

const FooterArea = styled.footer`
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
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);

  @media (min-width: 769px) {
    border-bottom: none;
    padding-bottom: 0;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;

    &:last-child {
      padding-bottom: 5px;

      &::after {
        bottom: 4px;
      }
    }

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

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
