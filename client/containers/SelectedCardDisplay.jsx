import React, { Component } from "react";
import { connect } from 'react-redux';
import * as mainActions from '../actions/mainActions'
import { Redirect } from 'react-router-dom';

const mapStateToProps = (store) => ({
  cardInfo: store.main.searchResults[store.main.cardId],
  backButton: store.main.backButton,
  userId: store.auth.userId
});

const mapDispatchToProps = (dispatch) => ({
  backButtonClicked: () => {dispatch(mainActions.backButtonClicked())},
  postFavoriteFoods: (foodObj, userId) => {dispatch(mainActions.postFavoriteFoods(foodObj, userId))},
  addToShoppingCart: (cartItem) =>{dispatch(mainActions.addToShoppingCart(cartItem))}
});

class SelectedCardDisplay extends Component {
  constructor(props){
    super(props);
  }

  render(){ingredients
    const cardProps = this.props.cardInfo;
    const ingredients = cardProps.ingredientLines.map((line) => {return <p>{line}</p>});
    const favoriteObj = {
      user_id: this.props.userId,
      label: cardProps.label,
      img_url: cardProps.image,
      recipe_url: cardProps.url
    }

    if(this.props.backButton === true){
      return <Redirect to='/maincontainer'></Redirect>
    }

    return (
      <div id="mainbody">
        <button onClick={(e) => this.props.backButtonClicked()}>GO BACK</button>
        <img src={cardProps.image} />
        <h3 id='label'>{cardProps.label}</h3>
        <p>see full recipe on: <a href={cardProps.url}> {cardProps.source} </a> </p>
        <div className="ingredients">
          {ingredients}
        </div>
        <div className="yield">
          <p>Yield: {cardProps.yield}</p>
        </div>
        <div className="nutrition">
          <p>Calories: {cardProps.calories}</p>
          <p>Fats: {cardProps.fats} </p>
          <p>Carbs: {cardProps.carbs} </p>
          <p>Protein: {cardProps.protein} </p>
        </div>
        <button onClick={(e)=>{this.props.postFavoriteFoods(favoriteObj, this.props.userId)}}>ADD TO FAVORITES</button>
        <button onClick={(e)=>{this.props.addToShoppingCart(cardProps.ingredientLines)}}>ADD INGREDIENTS TO CART </button>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedCardDisplay);
