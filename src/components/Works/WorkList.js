import React, {Component} from "react"
import styled from "styled-components"
import Work from "./Work"

const Section = styled.section`
  grid-column: 1 / 4;
  margin-left: -20px;
  margin-right: -20px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
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
      <Section>
        <FlexContainer>
          {this.state.sortedWorks.map(({ node, index}) => {
            return (
              <FlexItem>
                <Work key={index /* node.contentful_id */} work={node} />
              </FlexItem>
            )
          })}
        </FlexContainer>
      </Section>
    )
  }
}
