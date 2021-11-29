/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import HomePage from './pages/Home';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import ModalConnectWallet from './components/ModalConnect';
import Web3 from '../services/walletService/initWeb3';

export function App() {
  const { i18n } = useTranslation();
  const intanceValue = Web3.getInstance;
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Gamestate"
        defaultTitle="Gamestate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="Cross-chain, multi-world megaverse nexus"
        />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/modal" component={ModalConnectWallet} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
