import * as types from '../constants/actionTypes'


export const updateUsernameStr = (usernameStr) => ({
  type: types.UPDATE_USERNAME_STR,
  payload: usernameStr
});

export const updatePasswordStr = (passwordStr) => ({
  type: types.UPDATE_PASSWORD_STR,
  payload: passwordStr
});

export const loginOnclick = () => ({
  type: types.LOGIN_ONCLICK
});

export const signupOnclick = () => ({
  type: types.SIGNUP_ONCLICK
});
