import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import {
  DEFAULT_PAGE,
  MARKETS_PAGE,
  MARKET_CARD_PAGE,
  PRODUCTS_PAGE,
} from "./AppUrls";
import { MainPage, Markets, Market, Products } from "./pages";
import { useChangeUrl } from "./hooks";
import { ErrorPage } from "./components";

const App = () => {
  useChangeUrl();

  return (
    <Layout>
      <Routes>
        <Route path="*" Component={ErrorPage} />
        <Route path={DEFAULT_PAGE} Component={MainPage} />
        <Route path={MARKETS_PAGE} Component={Markets} />
        <Route path={MARKET_CARD_PAGE} Component={Market} />
        <Route path={PRODUCTS_PAGE} Component={Products} />
      </Routes>
    </Layout>
  );
};

export default App;
