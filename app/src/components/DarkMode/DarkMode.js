import React from "react"
import styled from "styled-components"

const ThemeSelect = styled.div`
  display: flex;
`

const SwitchContainer = styled.div`
  width: 32px;
  height: 16px;
  border-radius: 8px;
  will-change: transform;
  overflow: hidden;
  position: relative;
  align-self: center;
`
const Switch = styled.button`
  width: 48px;
  height: 16px;
  top: 0;
  left: 0;
  border: none;
  background-color: red;
  position: absolute;
  transition: 0.2s ease-in;
  will-change: transform;

  &.true {
    transform: translateX(0);
  }

  &.false {
    transform: translateX(-16px);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`

const Toggle = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  will-change: transform;
  background-color: #d4d4d4;
  border-bottom: 1px solid rgba(100,100,100,1.0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
`

const IndicatorDark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 24px;
  background-color: var(--primary);
  z-index: 1;
`

const IndicatorLight = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 16px;
  width: 24px;
  background-color: var(--primary);
  z-index: 1;
`

const CurrentMode = styled.p`
  margin: 0;
  padding-right: 1rem;
  letter-spacing: 0.025em;
`

const DarkMode = () => {

  const [darkMode, setDarkMode] = React.useState(
    typeof window !== 'undefined' && localStorage.getItem("darkMode") === "on" ? true : false

  );
  const handleDarkModeOn = () => {
    document.body.classList.add("dark-mode") 
    typeof window !== 'undefined' && localStorage.setItem("darkMode", "on");
    setDarkMode(true);
  };
  const handleDarkModeOff = () => {
    document.body.classList.remove("dark-mode") 
    typeof window !== 'undefined' && localStorage.setItem("darkMode", "off");
    setDarkMode(false);
  };

  React.useEffect(() => {
    typeof window !== 'undefined' && localStorage.getItem("darkMode") === "on" && (
      document.body.classList.add("dark-mode")
    )
  } )
  
  return (
    <>
      <ThemeSelect>
        <CurrentMode>
          {darkMode ? `${"DeepSea"}` : `${"Glacier"}`}
        </CurrentMode>
        <SwitchContainer>
          <Switch
            onClick={darkMode ? ( handleDarkModeOff ) : ( handleDarkModeOn ) }
            className={darkMode ? `${"false"}` : `${"true"}`}
          >
            <IndicatorDark />
            <Toggle />
            <IndicatorLight />
          </Switch>
        </SwitchContainer>
      </ThemeSelect>
    </>
  )
}

export default DarkMode
