import React from "react";
import Card from './Card.jsx';

const BoxArea = props => {
  const resultCards = props.searchResults.map((currentResult, idx) => {
    return <Card info={currentResult} index={idx} onCardClicked={props.onCardClicked}/>
  });

  return <div className="row">{resultCards}</div>

};

export default BoxArea;
