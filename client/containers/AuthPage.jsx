import React from "react";
import { render } from 'react-dom';
import { connect } from 'react-redux';
import App from "./App.jsx";

const mapStateToProps = (store) => ({

});

const mapDispatchToProps = (store) => ({

});

class AuthPage extends React{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        
        {/* input field for username */}
        <div className="username input">
          <input type="text" className="textbox"></input>
        </div>
        {/* input field for password */}
        <div className="password input">
          <input type="password" className="textbox"></input>
        </div>
        {/* contains the signup and login button */}
        <div className="buttons">
          <span>
            <button id="loginButton"></button> <button id="signUpButton"></button>
          </span>
       </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)