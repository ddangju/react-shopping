import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import backImg from "./img/22.png";
import Datas from "./data.js";
import List from "./list.js";

function App() {
  let [data, setData] = useState(Datas);
  // console.log(data);

  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="backContainer">
        <img className="imgContainer" src={backImg} alt="사진"></img>
      </div>
      <div className="container">
        {/* <div className="row"> */}
        {data.map((item) => (
          <List item={item} key={item.id}></List>
        ))}
      </div>
    </>
  );
}

export default App;
