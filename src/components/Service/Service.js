import React from "react"
import styled from "styled-components"
import services from "../../constants/services"
import Grid from "../Grid/Grid"

const StyledServiceItem = styled.article`
  //background-color: var(--servicesPanelBG);
  //border-top: 3px solid var(--primary);
  padding: 2.25rem 2.25rem;
  border-radius: var(--itemCardBorderRadius);
  box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`

const Service = props => {
  return (
    <section
      className={
        props.largePadding
          ? "section-padding section-padding--large"
          : "section-padding"
      }
    >
      <Grid>
        {services.map((item, index) => {
          return (
            <StyledServiceItem key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </StyledServiceItem>
          )
        })}
      </Grid>
    </section>
  )
}

export default Service
