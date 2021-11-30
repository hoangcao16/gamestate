/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import HomePage from './pages/Home';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import Web3 from 'services/walletService/initWeb3';
import BuyQuantum from './pages/BuyQuantum';
import QuantumOrder from './pages/Order';
import axios from 'axios';

export function App() {
  const { i18n } = useTranslation();
  const intanceValue = Web3.getInstance;

  // useEffect(() => {
  //   if (localStorage.getItem('extensionName')) {
  //     (async () => {
  //       await intanceValue.setWeb3();
  //       console.log('Extension', intanceValue.getWeb3());
  //     })();
  //   }
  // }, []);
  const baseURL = `${process.env.REACT_APP_BASE_API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/crypto-asset`; //responesive code
  axios.get(baseURL).then((response: any) => {
    localStorage.setItem(
      'StoreCryptoCurrency',
      JSON.stringify(response.data.data),
    );
  });

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
        <Route exact path="/buy" component={BuyQuantum} />
        <Route exact path="/order" component={QuantumOrder} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
