import * as types from '../constants/actionTypes';

const initialState = {
  usernameStr: '',
  passwordStr: '',
  loginOnClick: false,
  singupOnClick: false,
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_USERNAME_STR:
      return {
        ...state,
        usernameStr: action.payload
      }
    case types.UPDATE_PASSWORD_STR:
      //return state with payload inserted into password
      return {
        ...state,
        passwordStr: action.payload
      }
    case types.LOGIN_ONCLICK:
      //if login successful
      //should send login info to backend 
      //followed by routing to main page
      const loginOnClick = true;
      return {
        ...state,
        loginOnClick
      };

    case types.SIGNUP_ONCLICK:
      //should send info to backend to
      //create a new user in DB
      //followed by routing to main page
      const signupOnClick = true;
      return {
        ...state,
        signupOnClick
      }
      
      default: 
        return state;
  }
};

export default authReducer;