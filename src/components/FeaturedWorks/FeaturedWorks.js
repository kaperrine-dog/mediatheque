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
  @media (min-width: 769px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const FlexContainer = styled.div`
  grid-column: 1/4;
  margin-left: -20px;
  margin-right: -20px;
  @media (min-width: 769px) {
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
          <Title>Displaying your featured works is easy</Title>
          <p>
            
          </p>
          <Button text="View All Works" link="/works" />
        </TitleArea>
        <FlexContainer>
          {works.map(({ node }, index) => {
            return (
              <FlexItem key={index}>
                <Work key={node.workId} work={node} />
              </FlexItem>
            )
          })}
        </FlexContainer>
      </Grid>
    </Section>
  )
}

export default FeaturedWorks
