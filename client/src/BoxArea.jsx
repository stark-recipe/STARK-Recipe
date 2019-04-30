import React from "react";
import Row from "./Row.jsx";


const BoxArea = props => {
  const rowArr = [];
  for (let i = 0; i < 4; i += 1) {
    rowArr.push(
      <Row state={props.state} changePage={props.changePage} index={i * 3} key={rowArr} />
    );
  }

  return <div className="row">{rowArr}</div>

};

export default BoxArea;
