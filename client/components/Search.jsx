import React from "react";


const Search = props => {
  return (
    <div id="searchheader">
      <div id="logo">Stark Recipe Finder</div>
      <div id="searchbox">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          value={props.searchStr}
          placeholder="Find the best recipes from across the web!"
          onChange={(e) => {props.updateSearchStr(e.target.value)}}
        />
        <button id="searchBtn" onClick={() => props.callSearchStr(props.searchStr)}>
          {" "}
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default Search;
