import {GatsbyImage, getImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const WorkItem = styled.article`
  width: 100%;
  padding: 0 20px;
  .workImage{
    width: 100%;
  }
`

const WorkContent = styled.div`
  background: var(--worksPanelBG);
  border-top: 3px solid var(--primary);
  padding: 2.5rem 1.25rem;
  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
    max-width: calc((100vw - 60px - 80px) / 3);
  }

  h2 {
    margin-top: 0;
    display: inline-block;
  }

  p {
    margin-bottom: 0;
  }
`

const Work = ({ work }) => {
  const { name, price, slug, images } = work

  const image = getImage(images[0])

  return (
    <WorkItem>
      <GatsbyImage className="workImage" image={image} alt="single Work" />
      <WorkContent>
        <h2>{name || "Name not listed"}</h2>
        <h3>£ {price || "Call"}</h3>
        <AniLink className="btn" cover bg="#1d1d1d" to={`/works/${slug}`}>
          View Work
        </AniLink>
      </WorkContent>
    </WorkItem>
  )
}

Work.propTypes = {
  work: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Work
