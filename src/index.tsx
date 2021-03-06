import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import components
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import storeFactory from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeFactory}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
