import React from "react";
import Card from './Card.jsx';

const BoxArea = props => {
  const resultCards = props.searchResults.map((currentResult) => {
    return <Card info={currentResult}/>
  });

  return <div className="row">{resultCards}</div>

};

export default BoxArea;
