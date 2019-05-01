import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as authActions from '../actions/authActions'


const mapStateToProps = (store) => ({
  usernameStr:store.auth.usernameStr,
  passwordStr:store.auth.passwordStr,
  isLoggedIn:store.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  updateUsernameStr:(e) => {dispatch(authActions.updateUsernameStr(e.target.value))},
  updatePasswordStr:(e) => {dispatch(authActions.updatePasswordStr(e.target.value))},
  signupApi:(usernameStr, passwordStr) => {dispatch(authActions.signupApi(usernameStr, passwordStr))},
});


class SignupPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if (this.props.isLoggedIn === true) {
      return <Redirect to="/maincontainer"></Redirect>
    } else
    return (
      <div>
        <h1>On Signup Page</h1>
        {/* input field for username */}
        <div className="username input">
          <input type="text" className="textbox" value={this.props.usernameStr} onChange={this.props.updateUsernameStr}></input>
        </div>
        {/* input field for password */}
        <div className="password input">
          <input type="password" className="textbox" value={this.props.passwordStr} onChange={this.props.updatePasswordStr}></input>
        </div>
        {/* contains the signup and login button */}
        <div className="buttons">
          <span>
            <button id="completeSignup" onClick={(e)=>{this.props.signupApi(this.props.usernameStr, this.props.passwordStr)}}></button>
          </span>
       </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)