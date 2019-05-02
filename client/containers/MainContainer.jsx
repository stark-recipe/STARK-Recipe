//importing modules/packages/////////////////////////
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as mainActions from '../actions/mainActions'
import { Redirect } from 'react-router-dom';
//importing components//////////////////////////////
import Search from '../components/Search.jsx';
import CardArea from '../components/BoxArea.jsx';

//mapping state and action creators to props//////////////////////////
const mapStateToProps = (store) => ({
  searchStr: store.main.searchStr,
  searchResults: store.main.searchResults
})

const mapDispatchToProps = (dispatch) =>({
  updateSearchStr: (searchStr) => {dispatch(mainActions.updateSearchStr(searchStr))},
  callSearchStr: (searchStr) => {
    return fetch('http://localhost:3000/search',{
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({search: searchStr})
    })
    .then(response => response.json())
    .then(response => dispatch(mainActions.callSearchStr(response)));
  }
});

//MainContainer being created
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.cardClicked === true){
      return <Redirect to='/selectedCard'></Redirect>
    }
    return (
      <div>
        <Search searchStr={this.props.searchStr} updateSearchStr={this.props.updateSearchStr} callSearchStr={this.props.callSearchStr}/>
        <CardArea searchResults={this.props.searchResults} />
        <h1>Welcome to STARK recipes tracker</h1>
      </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);
