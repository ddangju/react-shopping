import React, { useState } from "react";
import cardData from "./data.js";
import BackImg from "./img/background.png";
import Card from "./Card";
import axios from "axios";

function App() {
  let [data, SetData] = useState(cardData);
  // let [data2, setData2] = useState([]);

  let handleClick = () => {
    <div>하이</div>;
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        // setData2(result.data);
        SetData([...data, ...result.data]);
        // console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="backgroundContainer">
        <img className="imgContainer" src={BackImg} alt="img"></img>
      </div>
      <div className="container">
        {data.map((item, idx) => {
          return <Card item={item} idx={idx} key={idx}></Card>;
        })}
        {/* {data2.map((item, idx) => {
          return <Card item={item} idx={idx} key={idx}></Card>;
        })} */}
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        더보기
      </button>
    </>
  );
}

export default App;
