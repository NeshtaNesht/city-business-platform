import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import App from "./App";
import "./App.css";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
document.title = "Городская бизнес-платформа";

// document.baseURI.substring(
//   document.baseURI.indexOf(window.location.origin) +
//     window.location.origin.length,
//   document.baseURI.lastIndexOf("/")
// )

root.render(
  <ConfigProvider>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </ConfigProvider>
);
