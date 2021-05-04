import React, {Component} from "react"
import styled from "styled-components"
import Work from "./Work"

const StyledSection = styled.section`
  margin: auto;
  width: calc(100vw - var(--paddingBorder) * 2);
  @media (min-width: 769px){
    width: 100%;
    grid-column: 1 / 4;
    margin-left: -20px;
    margin-right: -20px;
  }

`

const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledFlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 769px) {
    flex: 0 0 calc(100% / 2);
  }
  @media (min-width: 1000px) {
    flex: 0 0 calc(100% / 3);
  }
`

export default class WorkList extends Component {
  state = {
    works: [],
    sortedWorks: [],
  }

  componentDidMount() {
    this.setState({
      works: this.props.works.edges,
      sortedWorks: this.props.works.edges,
    })
  }
  render() {
    return (
      <StyledSection>
        <StyledFlexContainer>
          {this.state.sortedWorks.map(({ node }, index) => {
            return (
              <StyledFlexItem
              key={node.workId}
              >
                <Work 
                  key={node.workId /* node.contentful_id */} 
                  work={node} />
              </StyledFlexItem>
            )
          })}
        </StyledFlexContainer>
      </StyledSection>
    )
  }
}
