//import {GatsbyImage} from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import styled from "styled-components"


const StyledIconList = styled.div`
  .title{
    margin: 0 0 15px;
  }
  .tags{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 175px;
    gap: 20px;
    a{
      //margin: 10px;
      .tagsList{
        display: flex;
        flex-wrap: wrap;
        //align-items: flex-start;
        align-items: center;
        //margin-left: auto;
        gap: 20px;
        .imageFrame{
          //margin-right: auto;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          img{
            height: 100%;
            width: 100%;
            object-fit: contain;
            border-radius: 50%;
            background: azure;
          }
        }
      }
    }
  }
`

const TagIconList = ({tags}) => {
  
  return (
    <StyledIconList
      className = "glass-morphizm"
    >
      <h3 className="title">TOPICS</h3>
      <div className="tags">
        { tags.map(( tag ) => {
          return(
              <AniLink
                cover
                bg="var(--background)"
                to={`/tags/${tag.slug}`}
              >
              <div className="tagsList">
                <div className="imageFrame">
                  <img
                    src={tag.image.file.url}
                  />
                </div>
                <span>
                  {tag.title}
                </span>
              </div>
              </AniLink>
          )
        }) }
      </div>
    </StyledIconList>
  )
}
export default TagIconList