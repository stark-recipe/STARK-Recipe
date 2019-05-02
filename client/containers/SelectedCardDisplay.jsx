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
  postFavoriteFoods: (foodObj, userId) => {dispatch(mainActions.postFavoriteFoods(foodObj, userId))}
});

class SelectedCardDisplay extends Component {
  constructor(props){
    super(props);
  }

  render(){
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
          <button className="pageBtn" onClick={(e) => this.props.backButtonClicked()}>GO BACK</button>
          <br></br>
          <br></br>
          <img className="RecipeImg" src={cardProps.image} />
          <h2 id='label'>{cardProps.label}</h2>
          <p>See full recipe on: <a href={cardProps.url}> {cardProps.source} </a> </p>
      <div className="ingredients">
          <h4>INGREDIENTS:</h4>
          {ingredients}
      </div>
      <div className="preparation">

      </div>
      <div className="yield">
        <p>Yield: {cardProps.yield}</p>
      </div>
      <div className="nutrition">
        <h4>NUTRITION:</h4>
        <p>Calories: {cardProps.calories}</p>
        <p>Fats: {cardProps.fats} </p>
        <p>Carbs: {cardProps.carbs} </p>
        <p>Protein: {cardProps.protein} </p>
      </div>
      <button className="pageBtn" onClick={()=>{this.props.postFavoriteFoods(favoriteObj, this.props.userId)}}>ADD TO FAVORITES</button>
      </div>
    );
  }
}

// <div id="mainbody">
//   <div id="upperContainer">
//     <div className="upperLeftContainer">
//       <img id="foodImg" src={props.state.label[props.index]} />
//     </div>
//     <div className="upperRightContainer">
//       {/* <h3 id="label">{props.state.label}</h3> */}
//       <p>see full recipe on: {props.state.source[props.index]}</p>
//       <button> Save </button>
//     </div>
//   </div>
//   <div id="lowerContainer">
//     <div id="ingredients">
//       <div>{props.state.ingredientLines[props.index]} ingredients</div>
//       ))}
//     </div>
//     <div id="preparation">
//       <button>Instructions</button> on {props.state.source[props.index]}
//     </div>

//     <div id="nutrition">
//       Nutrition <br />
//       <div id="nutiritionTotal">
//         <div id="caloriesPerServing">
//           {" "}
//           {props.state.calories[props.index]}
//           {Math.floor(
//             parseInt(props.state.calories[props.index]) / parseInt(props.state.yield[props.index])
//           )}{" "}
//           <p>CALRORIES / SERVING</p>{" "}
//         </div>
//         <div id="totalServing">
//           {props.state.yield[props.index]}
//           <p>SERVINGS</p>
//         </div>
//       </div>
//       <br />
//       <div id="nutiritionGraph" />
//       <div id="seperateNutrition">
//         <p>Fat: {props.state.fats[props.index]} </p>
//         <p>Carbs:{props.state.carbs[props.index]} </p>
//         <p>Protein: {props.state.protein[props.index]} </p>
//       </div>
//     </div>
//   </div>
// </div>

export default connect(mapStateToProps,mapDispatchToProps)(SelectedCardDisplay);
