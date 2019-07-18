import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as authActions from '../actions/authActions'


const mapStateToProps = (store) => ({
  usernameStr:store.auth.usernameStr,
  passwordStr:store.auth.passwordStr,
  isLoggedIn:store.auth.isLoggedIn,
  isSignup:store.auth.isSignup,
  error:store.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  updateUsernameStr:(e) => {dispatch(authActions.updateUsernameStr(e.target.value))},
  updatePasswordStr:(e) => {dispatch(authActions.updatePasswordStr(e.target.value))},
  signupOnClick:() => {dispatch(authActions.signupOnClick())},
  loginApi:(usernameStr, passwordStr) => {dispatch(authActions.loginApi(usernameStr, passwordStr))},
});


class AuthPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let errorDiv;
    if(this.props.error != null) errorDiv = <div id='error'><p>{this.props.error}</p></div>;

    if (this.props.isSignup === true) {
      return <Redirect to="/signup"></Redirect>
    } else if (this.props.isLoggedIn === true) {
      return <Redirect to="/maincontainer"></Redirect>
    } else
    return (
      <div className="loginSignup">
        <h1 className="loginSignupHeader">Welcome</h1>
        <img className="foodImg" src="https://img.icons8.com/bubbles/100/000000/food.png"></img>
        {/* input field for username */}
        <div className="username input">
          <input type="text" className="loginSignupInput" value={this.props.usernameStr} onChange={this.props.updateUsernameStr}></input>
        </div>
        {/* input field for password */}
        <div className="password input">
          <input type="password" className="passwordInput" value={this.props.passwordStr} onChange={this.props.updatePasswordStr}></input>
        </div>
        {/* contains the signup and login button */}
        <div className="buttons">
          <span>
            <button id="loginButton" onClick={(e)=>{this.props.loginApi(this.props.usernameStr, this.props.passwordStr)}}>Log In</button>
            <br></br>
            <span className="member">Not a member? </span>
            {/* <button id="signUpButton" onClick={this.props.signupOnClick}>Sign Up Now</button> */}
            <a id="signUpButton" onClick={this.props.signupOnClick}>Sign Up Now</a>
          </span>
       </div>
       {errorDiv}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
