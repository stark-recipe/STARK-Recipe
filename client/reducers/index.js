import { combineReducers } from 'redux';
import authReducer from 'client/reducers/marketsReducer'



const reducers = combineReducers({ 
  auth: authReducer
});

export default reducers;
