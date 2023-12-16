import React from "react";
import './pro.css'
function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="kk"/>
      <div className="card-body">
        <h2 className="card-text">{props.details}</h2>
        <h3 className="price">{props.price}</h3>
        <div className="btn">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
