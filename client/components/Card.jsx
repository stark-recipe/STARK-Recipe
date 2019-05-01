import React from "react";
import SelectedCardDisplay from './SelectedCardDisplay.jsx';

const Card = props => {
  return (
    <div className="card">
      <button id={props.index} onClick={props.changePage}>
        {props.state.hasBeenClicked === false ? (
          <div>
            <img src={props.state.label[props.index]} />
            <p> click to see the recipe <a href={props.state.url[props.index]}></a></p>
            <p>{props.state.source[props.index]}</p></div>)
          : (<SelectedCardDisplay state={props.state} index={props.index} />)}

      </button>


    </div>
  );
};

export default Card;
