import {graphql, useStaticQuery} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledSidebar = styled.section`
  margin: 3rem 0 0;
`

const StyledRecentItems = styled.div`
  margin: 40px 0 40px;
  padding: 20px 20px 20px;
  h3{
    text-decoration: none;
    font-weight: 400;
    min-height: 2.5em;
  }
  .navLink{
    text-decoration: none;
    color: var(--textColor);
    display: block;
    background: var(--blogPanelBG);
  }
`

const StyledBlogImage = styled.div`
    .main-image{
      width: 100%;
      height: 150px;
      padding: 20px 20px 20px;
      img{
        width: 100%;
        height: 150px;
        border-radius: var(--buttonBorderRadius);
      }
    }
  `

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allContentfulPosts(
        sort: { fields: [published], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            id
            slug
            title
            published(formatString: "Y年MM月DD日")
            images {
              fluid {
                ...GatsbyContentfulFluid
              }
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP]
              )
            }
            tags {
              title
              slug
            }
          }
        }
      }
    }
  `)


  const posts = data.posts.edges
  return (
    <StyledSidebar className="StyledSidebar">
      <h2>最近の投稿</h2>
      <div className='recentPostsLinks'>
        { posts.map(({ node, mainImage=node.images[0] }) => (
          <StyledRecentItems className = "neumorphizm">
            <AniLink
              className='navLink' 
              cover
              bg="var(--background)"
              to={`/blogs/${node.slug}`}>
              <StyledBlogImage
                className = 'imageWrapper'
              >
                <GatsbyImage
                  image={mainImage.gatsbyImageData}
                  className="main-image"
                  alt="Placeholder"
                />
              </StyledBlogImage>
              <h3 className={""}>
                {node.title}
              </h3>
              <span className={""}>
                {node.published}
              </span>
            </AniLink>
          </StyledRecentItems>
        ))}
      </div>
    </StyledSidebar>
  )
}

RecentPosts.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      published: PropTypes.instanceOf(Date).isRequired,
      images: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired,
      ]),
    }
    ),
  }),
}


export default RecentPosts

