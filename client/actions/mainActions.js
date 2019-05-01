import * as types from '../constants/actionTypes';

export const updateSearchStr = (searchStr) => ({
  type: types.UPDATE_SEARCH_STR,
  payload: searchStr
})

export const callSearchStr = (searchResults) => ({
  type: types.CALL_SEARCH_STR,
  //this is where the result of calling thunk is stored
  payload: searchResults
});

export const changePage = (id) => ({
  type: types.CHANGE_PAGE,
  payload: id
});

export const changeHasBeenClicked = () => ({
  type: types.CHANGE_HAS_BEEN_CLICKED
});

export const changeFavoriteFoods = (newFavorite) => ({
  type: types.CHANGE_FAVORITE_FOODS,
  payload: newFavorite
});

export const connectToRecipe = (newRecipe) => ({
  type: types.CONNECT_TO_RECIPE,
  payload: newRecipe
});

export const getShoppingList = (shoppingList) => ({
  type:types.GET_SHOPPING_LIST
});
