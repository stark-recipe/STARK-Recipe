import React, { Component } from "react";
import { connect } from 'react-redux';
import * as mainActions from '../actions/mainActions'
import { Redirect } from 'react-router-dom';

const mapStateToProps = (store) => ({

});

const mapDispatchToProps = (dispatch) =>({

});

class SelectedCardDisplay extends Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.backButtonClicked === true){
      //do the thing
    }
    return (
      <div id="mainbody">
        <div id="upperContainer">
          <div className="upperLeftContainer">
            <img id="foodImg" src={props.state.label[props.index]} />
          </div>
          <div className="upperRightContainer">
            {/* <h3 id="label">{props.state.label}</h3> */}
            <p>see full recipe on: {props.state.source[props.index]}</p>
            <button> Save </button>
          </div>
        </div>
        <div id="lowerContainer">
          <div id="ingredients">
            <div>{props.state.ingredientLines[props.index]} ingredients</div>
            ))}
          </div>
          <div id="preparation">
            <button>Instructions</button> on {props.state.source[props.index]}
          </div>

          <div id="nutrition">
            Nutrition <br />
            <div id="nutiritionTotal">
              <div id="caloriesPerServing">
                {" "}
                {props.state.calories[props.index]}
                {Math.floor(
                  parseInt(props.state.calories[props.index]) / parseInt(props.state.yield[props.index])
                )}{" "}
                <p>CALRORIES / SERVING</p>{" "}
              </div>
              <div id="totalServing">
                {props.state.yield[props.index]}
                <p>SERVINGS</p>
              </div>
            </div>
            <br />
            <div id="nutiritionGraph" />
            <div id="seperateNutrition">
              <p>Fat: {props.state.fats[props.index]} </p>
              <p>Carbs:{props.state.carbs[props.index]} </p>
              <p>Protein: {props.state.protein[props.index]} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SelectedCardDisplay);
