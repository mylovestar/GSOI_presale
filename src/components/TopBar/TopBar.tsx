import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Logo from '../Logo'
import AccountButton from './components/AccountButton'
import PresaleBtn from './components/PresaleBtn'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <Container size="lg">
      <StyledTopBarInner>
        <StyledLogoWrapper>
          <Logo />
        </StyledLogoWrapper>
        {/* <StyledPresaleButton>
          <PresaleBtn />
        </StyledPresaleButton> */}
        <StyledAccountButtonWrapper>
          <AccountButton />
        </StyledAccountButtonWrapper>
      </StyledTopBarInner>
    </Container>
  )
}

const StyledLogoWrapper = styled.div`
  margin: auto auto auto 0;
  @media (max-width: 400px) {
    width: auto;
  }
`

const StyledPresaleButton = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: auto;
  padding: auto 10px;
  @media (max-width: 767px) {
  justify-content: center;
  width: auto;
}
`


const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: center;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: auto;
  padding: auto 10px;
  @media (max-width: 767px) {
    margin-top: 15px;
    justify-content: center;
    width: auto;
  }
`

export default TopBar
