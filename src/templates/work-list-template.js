import {graphql} from "gatsby"
import React from "react"
import Grid from "/src/components/Grid/Grid.js"
import PageIntro from "/src/components/PageIntro/PageIntro.js"
import Seo from "/src/components/SEO.js"
import WorkList from "/src/components/Works/WorkList.js"

export const query = graphql`
  query getWorks($skip: Int!, $limit: Int!) {
    works: allContentfulWorks(
      skip: $skip
      limit: $limit
      filter: {node_locale: {eq: "ja-JP"}}
      sort: { fields: released, order: DESC }
    ) {
      edges {
        node {
          released(formatString: "Y年MM月DD日")
          updatedAt(formatString: "Y年MM月DD日")
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

const Works = ( props ) => {
  const { data } = props

  return (
    <>
      <Seo title="Works" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="All of my Works"
            subTitle=""
            paragraph=""
          />
          <WorkList 
            works={data.works}
            pageContext = { props.pageContext }
          />
          {/* <Works /> */}
        </Grid>
      </section>
    </>
    
    

  )
}

export default Works
