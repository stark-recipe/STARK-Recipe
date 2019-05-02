import React, { Component } from "react";
import { connect } from 'react-redux';
import RecipeItem from "./RecipeItem.jsx"


const mapStateToProps = (store) => ({
  shoppingCartArr:store.main.shoppingCartArr
})


class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cartItemsArr = this.props.shoppingCartArr.map(function(el){
      <RecipeItem item={el} />
    })
    return (
      <div>
        {cartItemsArr}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShoppingList)
