import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { DEFAULT_PAGE, MARKETS_PAGE } from "./AppUrls";
import { MainPage, Markets } from "./pages";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={DEFAULT_PAGE} Component={MainPage} />
        <Route path={MARKETS_PAGE} Component={Markets} />
      </Routes>
    </Layout>
  );
};

export default App;
