import React, { useState } from "react";
import cardData from "./data.js";
import BackImg from "./img/background.png";
import Card from "./Card";

function App() {
  let [data] = useState(cardData);

  return (
    <>
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
