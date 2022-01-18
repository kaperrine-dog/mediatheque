import React from "react"
import Pagination from "../Pagination/Pagination.js"
import Work from "./Work"

const WorkList = ( {works, pageContext}) => {
  
  return (
    <>
      {works.edges.map(({ node }, index) => {
        return (
            <Work 
              key={ node.workId } 
              work={node} />
              )
        })}
        { typeof window !== `undefined` &&
          <Pagination
            pageContext = {pageContext}
            basePath = {pageContext.basePath}
            numPages = {pageContext.numWorksPages}
          />
        }
    </>
  )
}

export default WorkList