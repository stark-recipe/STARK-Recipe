import * as types from '../constants/actionTypes';


const initialState = {
  usernameStr: '',
  passwordStr: '',
  isLoggedIn: false,
  isSingup: false,
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

    case types.IS_SIGNUP:
      //should send info to backend to
      //create a new user in DB
      //followed by routing to main page
      const isSignup = true;
      return {
        ...state,
        isSignup
      }

      case types.IS_LOGGED_IN:
        const isLoggedIn = true;
        return {
          ...state,
          isLoggedIn
        }
      
      default: 
        return state;
  }
};


export default authReducer;