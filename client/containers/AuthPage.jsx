import React from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/actions'


const mapStateToProps = (store) => ({
  usernameStr:store.auth.usernameStr
});

const mapDispatchToProps = (dispatch) => ({
  updateUsernameStr:(e) => {dispatch(actions.updateUsernameStr(e.target.value))}
});


class AuthPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {/* input field for username */}
        <div className="username input">
          <input type="text" className="textbox" value={this.props.usernameStr} onChange={this.props.updateUsernameStr}></input>
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