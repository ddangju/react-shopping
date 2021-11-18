import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Nav from "./Nav";
import Detail from "./Detail";
import CardData from "./data.js";
import Product from "./Product";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../src/App.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/Detail">
          {CardData.map((item, idx) => (
            <Detail item={item} idx={idx} key={idx}></Detail>
          ))}
        </Route>
        <Route exact path="/Product/:id">
          <Product item={CardData}></Product>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
