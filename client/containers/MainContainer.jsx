import React, { Component } from "react";
import { connect } from 'react-redux';
import * as mainActions from '../actions/mainActions'

const mapStateToProps = (store) => {

}

const mapDispatchToProps = (dispatch) =>{

}

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Wrong page Foo</h1>
      </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);
