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
    max-width: 500px;
    margin: auto;
  @media (min-width: 769px) {
    grid-column: 1 / 3;
    max-width: none;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / 2;
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
          <Title>Featured works</Title>
          <p>
          親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）
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
