import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = (props) => {
  let { id } = useParams();
  let [change, setChange] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setChange(false);
    }, 1500);
    // console.log(style);
  });

  // visibility: hidden;
  console.log(change);
  return (
    <>
      <div
        className="my-alert2"
        style={
          change === true ? { display: "block" } : { visibility: "hidden" }
        }
      >
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              alt="사진"
              src={`https://codingapple1.github.io/shop/shoes${
                Number(id) + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{`${props.item[id].title}`}</h4>
            <p>{`${props.item[id].content}`}</p>
            <p>{`${props.item[id].price}`}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
