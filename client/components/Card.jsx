import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img src={props.info.image} />
      <h4>{props.info.label}</h4>
      <p>calories: {props.info.calories}</p>
    </div>
  );
};

export default Card;
