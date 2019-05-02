import React, { Component } from "react";

import ShoppingList from "./ShoppingList.jsx";
import Favorite from "./Favorite.jsx";

const RightMenu = props => {
  return (
    <div id="rightMenuContainer">
      <Favorite userId={props.userId} fetchFavoriteFoods={props.fetchFavoriteFoods}/>
      <ShoppingList />
    </div>
  );
};

export default RightMenu;
