import React from "react";

function Items(props) {
  return (
    <>
      <div className="list-items">
        <i
          className="fa-solid fa-square-xmark"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.one}</li>
      </div>
    </>
  );
}
export default Items;
