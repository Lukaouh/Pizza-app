import React from "react";
import "../styles/Menu.css";
function menuItem(props) {
  return (
    <div className="menuItem">
      <div
        className="itemList"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <h2> {props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
}

export default menuItem;
