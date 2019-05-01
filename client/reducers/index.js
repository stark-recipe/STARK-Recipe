import { combineReducers } from 'redux';
import authReducer from './AuthReducer'
import mainReducer from './MainReducer'

const reducers = combineReducers({
  auth: authReducer,
  main: mainReducer
});


export default reducers;
