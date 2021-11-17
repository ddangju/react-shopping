import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
// import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "../src/App.css";
import Detail from "./Detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <App />
        <Detail />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
