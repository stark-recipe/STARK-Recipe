import * as types from "../constants/actionTypes";

 const initialState = {
   searchResults: {},
   cart: [],
   currCard: [],
   hasBeenClicked: false,
   favoriteFoods: []
 }

 const mainReducer = (state = initialState, action) => {
   switch(action.type) {
     case types.UPDATE_SEARCH_STR:
     case types.CALL_SEARCH_STR:
     case types.CHANGE_PAGE:
     case types.CHANGE_HAS_BEEN_CLICKED:
     case types.CHANGE_FAVORITE_FOODS:
     case types.CONNECT_TO_RECIPE:
     case types.GET_SHOPPING_LIST:
     default:
      return state;
   }
 }

export default mainReducer
