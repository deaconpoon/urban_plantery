import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./component/App";
import Store from "./store/Store";

ReactDOM.render(
  <Provider store={Store}>
    <App></App>
  </Provider>,
  document.getElementById(`root`)
);
