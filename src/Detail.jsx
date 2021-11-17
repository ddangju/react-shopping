import React from "react";
import { useHistory } from "react-router-dom";

function Detail(props) {
  let history = useHistory();

  return (
    <>
      <div className="container">
        <div
          className="row"
          onClick={() => {
            history.push(`/Product/${props.idx}`);
          }}
        >
          <div className="col-md-6">
            <img
              alt="사진"
              src={`https://codingapple1.github.io/shop/shoes${
                props.idx + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.item.title}</h4>
            <p>{props.item.content}</p>
            <p>{props.item.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack();
              }}
            >
              {/*history.push(이동할경로) */}
              이전으로돌아가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
