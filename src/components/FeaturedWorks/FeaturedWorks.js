import {graphql, useStaticQuery} from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "../Button/Button"
import Grid from "../Grid/Grid"
import Work from "../Works/Work"


const getWorks = graphql`
  query {
    featuredWorks: allContentfulWorks(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          introduction
          workId: contentful_id
          slug
          description {
            description
          }
          images {
            gatsbyImageData(width: 600, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`
const TitleArea = styled.div`
    grid-column: 1 / 1;
    grid-row: 2 / 3;
    max-width: 500px;
    margin: auto;
  @media (min-width: 769px) {
    grid-column: 1 / 3;
    max-width: none;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / 4;
  }
  p{
    margin: 0 0 2em;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const FlexContainer = styled.div`
  //grid-column: 1/4;
  @media (min-width: 769px) {
    margin-left: -20px;
    margin-right: -20px;
    grid-column: 2 / 4;
    display: flex;
    justify-content: space-between;

    p {
      margin-top: 0;
    }
  }
`

const FlexItem = styled.div`
  flex: 0 0 50%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Section = styled.section`
  background: var(--parallaxBG);
`

const FeaturedWorks = ({ largePadding, id }) => {
  const response = useStaticQuery(getWorks)
  const works = response.featuredWorks.edges

  return (
    <Section
      id={id}
      className={largePadding ? "section-padding--large" : "section-padding"}
    >
      <Grid>
        <TitleArea>
          <Title></Title>
          <p>
          
          </p>
          <Button text="View All Works" link="/works" />
        </TitleArea>
          {works.map(({ node }, index) => {
            return (
                <Work key={node.workId} work={node} />
            )
          })}
      </Grid>
    </Section>
  )
}

export default FeaturedWorks
