import React, {useState} from "react"
import styled from "styled-components"

const AccordionItem = styled.article`
  width: calc( 100vw - var(--paddingBorder) * 2 );
  border-radius: var(--itemCardBorderRadius);
  background: var(--background);
  box-shadow:  -20px 20px 40px var(--neumorphismShadow),
                20px -20px 40px var(--neumorphizmLight);
  width: auto;
  max-width: calc( 100vw - var(--paddingStd) );
  &:active{
    box-shadow: -8px 8px 16px var(--neumorphismShadow),
                10px -10px 20px var(--neumorphizmLight);
  }
  @media (min-width: 769px){
    //max-width: calc( 100% - var(--paddingStd) );
    max-width: 100%;
  }
  @media (min-width: 1000px){
    //max-width: calc( 100% - var(--paddingStd) );
    max-width: 100%;
  }

  .accordionDesc{
    padding: 0 20px;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.7s ease-out;
    overflow-y: hidden;
  }
  &.acd-open {
    .indicator {
      transform: rotate(0deg);
      &:before {
        //left: 19px;
      }
      &:after {
        //right: 19px;
      }
    }
    .accordionDesc{
      padding: 20px 20px 20px;
      height: auto;
      opacity: 1;
      visibility: visible;
      transition: all 0.7s ease-out;
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
    transform: rotate( 180deg );
    transition: transform 0.3s;
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
      left: 22px;
      transform: rotate(45deg);
      transition: left 0.1s;
    }

    &:after {
      right: 22px;
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
  //background-color: var(--background);
`

const Accordion = ({children, title , state}) => {
  const [showInfo, setInfo] = useState(state)

  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }

  return (
    <AccordionItem className={showInfo ? `${"acd-open"}` : `${"acd-close"}`}>
      <AccordionTitle onClick={toggleInfo}>
        <span>{title}</span>
        <span className="indicator"></span>
      </AccordionTitle>
      {<AccordionDesc 
        className="accordionDesc">
          {children}
      </AccordionDesc>}
    </AccordionItem>
  )
}

export default Accordion
