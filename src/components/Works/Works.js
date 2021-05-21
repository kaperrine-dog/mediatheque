import {graphql, useStaticQuery} from "gatsby"
import React from "react"
import WorkList from "./WorkList"

const getWorks = graphql`
  query {
    works: allContentfulWorks
    (filter: {node_locale: {eq: "ja-JP"}}) {
      edges {
        node {
          name
          workId: contentful_id
          slug
          introduction
          url
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

const Works = () => {
  const { works } = useStaticQuery(getWorks)
  return <WorkList works={works} />
}

export default Works
