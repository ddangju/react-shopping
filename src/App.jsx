import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Nav } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import cardData from "./data.js";
import BackImg from "./img/background.png";
import Card from "./Card";
import Detail from "./Detail";

function App() {
  let [data] = useState(cardData);
  // console.log(data[0].title);
  // const menuChange=()=>{
  //   history.push()
  // }

  return (
    <>
      {/* <Router>
        <Nav>
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="./Detail">Detail</Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="#">Test</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="#">Test</Nav.Link>
          </Nav.Item>
        </Nav>
      </Router> */}

      <Route exact path="/" component={App}></Route>
      <Route exact path="./Detail" component={Detail}></Route>

      <div className="backgroundContainer">
        <img className="imgContainer" src={BackImg} alt="img"></img>
      </div>
      <div className="container">
        {data.map((item, idx) => {
          return <Card item={item} idx={idx} key={idx}></Card>;
        })}
      </div>
    </>
  );
}

export default App;
