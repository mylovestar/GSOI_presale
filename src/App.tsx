import React, { useCallback, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import * as bsc from '@binance-chain/bsc-use-wallet'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import ModalsProvider from './contexts/Modals'
import PresaleProvider from './contexts/PresaleProvider'
import {lightTheme} from './theme'
import Home from './views/Home'
import Background from './assets/img/background.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    // background: url(${Background});
    // background: #ff0101;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: white;
    margin: 0px;
    font-family: "Caudex",Sans-serif;
  }

  #root{
    padding: 8px;
    background-color: transparent;
    background-image: linear-gradient(
    180deg
    ,#cad8df 0%,#12121200 100%);
        opacity: .9;
  }
`;
const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Providers>
      <Router>
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    
    <ThemeProvider theme={lightTheme}>
    <GlobalStyle/>
      <UseWalletProvider
        chainId={5}
        connectors={{
          walletconnect: { rpcUrl: 'https://ethereum-goerli.publicnode.com' },
        }}
      >
        <PresaleProvider>
          <ModalsProvider>{children}</ModalsProvider>
        </PresaleProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

export default App
