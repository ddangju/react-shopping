import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            alt="사진"
            src={`https://codingapple1.github.io/shop/shoes${
              props.idx + 1
            }.jpg`}
            width="100%"
          />
          <h4>{props.item.title}</h4>
          <p>
            {props.item.content} & {props.item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
