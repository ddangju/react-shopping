import React from "react";

const List = (props) => {
  // console.log(props.item.id);
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img src={props.item.img} alt="img" width="100%" />
          <h4>{props.item.title}</h4>
          <p>{props.item.content}</p>
        </div>
      </div>
    </div>
  );
};

export default List;
