import React, { Component } from "react";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    };
  }

  // componentDidMount() {
  //   shoppingList();
  // }

  // shoppingList() {
  //   axios.get("http://localhost:3000/mainShoppingList").then(res => {
  //     this.setState({ shoppingList: res.data });
  //   });
  // }
  render() {
    //   const favoriteBox = this.state.foods.map(food => (
    //       <div>{foods.hits.recipe.image}</div>
    //   ))
    return (
      <div>
        <div className="rightMenuBox">
          <button className="rightMenuBtn">Shopping List</button>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
