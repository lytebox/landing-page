import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";
import { GlobalStyle } from "./global-styles";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById("root")
);
