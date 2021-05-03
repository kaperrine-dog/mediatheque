import React, {useState} from "react"
import styled from "styled-components"

const AccordionItem = styled.article`
  border-radius: var(--itemCardBorderRadius);
  background: var(--background);
  background: var(--itemPanelBGDark);
  box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);

  .accordionDesc{
    padding: 0 20px;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    overflow-y: hidden;
  }
  &.acd-open {
    .indicator {
      &:before {
        left: 19px;
      }
      &:after {
        right: 19px;
      }
    }
    .accordionDesc{
      padding: 20px 20px;
      height: auto;
      opacity: 1;
      visibility: visible;
      transition: all 0.3s;
      overflow-y: visible;
    }
  }
  &.acd-close{
    
  }
`

const AccordionTitle = styled.div`
  border-top: 1px solid var(--neumorphizmLight) 90%;
  border-radius: var(--itemCardBorderRadius);
  color: var(--text-color);
  padding: 14px 20px;
  background-color: var(--background);
  position: relative;
  margin-bottom: 5px;

  .indicator {
    width: 50px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    &:before,
    &:after {
      position: absolute;
      content: "";
      display: inline-block;
      width: 12px;
      height: 3px;
      background-color: var(--primary);
      top: 50%;
    }
    &:before {
      left: 20px;
      transform: rotate(45deg);
      transition: left 0.1s;
    }

    &:after {
      right: 20px;
      transform: rotate(-45deg);
      transition: right 0.1s;
    }
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    margin: 0;
    font-weight: 900;

    @media (min-width: 1200px) {
      font-size: 1.125rem;
    }
  }

`

const AccordionDesc = styled.div`
  
`

const Accordion = ({ title, description }) => {
  const [showInfo, setInfo] = useState(false)

  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }

  return (
    <AccordionItem className={showInfo ? `${"acd-open"}` : `${"acd-close"}`}>
      <AccordionTitle onClick={toggleInfo}>
        <span>{title}</span>
        <span className="indicator"></span>
      </AccordionTitle>
      {<AccordionDesc className="accordionDesc">{description}</AccordionDesc>}
    </AccordionItem>
  )
}

export default Accordion
