import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import styled from "styled-components"



const StyledSidebar = styled.div`
  margin: 3rem 0 0;
  
`
const StyledSideNav = styled.nav`
  .recentPostsLinks{
    
    .navLink{
      text-decoration: none;
      color: var(--textColor);
      display: block;
      background: var(--blogPanelBG);
      
    }
  }
`
const StyledRecentPosts = styled.div`

`

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPosts(
        sort: { fields: [published], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            id
            slug
            title
            published(formatString: "Y年MM月DD日")
          }
        }
      }
    }
  `)

  const posts = data.allContentfulPosts.edges
  return (
    <StyledSidebar className="StyledSidebar">
      <section className="">
        <div className="">
          <div className={""}>
            <StyledRecentPosts>
              <h2>最近の投稿</h2>
            </StyledRecentPosts>
            <StyledSideNav>
              <div className='recentPostsLinks'>
                {posts.map(({ node }) => (
                  <Link 
                    className='navLink' 
                    as={Link} 
                    to={`/blogs/${node.slug}`}>
                    <h3 className={""}>
                      {node.title}
                    </h3>
                    <span className={""}>
                      {node.published}
                    </span>
                  </Link>
                ))}
              </div>
            </StyledSideNav>
          </div>
        </div>
      </section>
    </StyledSidebar>
  )
}

export default Sidebar

