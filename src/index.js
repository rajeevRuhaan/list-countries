import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

// import components
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reduxStore from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
