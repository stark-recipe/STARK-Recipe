import * as types from '../constants/actionTypes'


export const updateUsernameStr = (usernameStr) => ({
  type: types.UPDATE_USERNAME_STR,
  payload: usernameStr
});

export const updatePasswordStr = (passwordStr) => ({
  type: types.UPDATE_PASSWORD_STR,
  payload: passwordStr
});


export const isSignup= () => ({
  type: types.IS_SIGNUP,
  payload: bool
});

export const isLoggedIn = (bool) => ({
  type: types.IS_LOGGED_IN,
  payload: bool
})

export const loginApi = (usernameStr, passwordStr) => {
  return function(dispatch, getState) {
    return fetch('http://localhost:3000/signup', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({"userName": usernameStr, "password": passwordStr})
    })
    .then (response => response.json())
    .then(response => {
      dispatch(isLoggedIn(response.bool))
    })
  }
}