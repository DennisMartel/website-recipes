import RecipeService from "../services/recipes.service";

export const GET_RECIPES_ACTION_START = "GET_RECIPES_ACTION_START";
export const GET_RECIPES_ACTION_SUCCESS = "GET_RECIPES_ACTION_SUCCESS";
export const GET_RECIPES_ACTION_ERROR = "GET_RECIPES_ACTION_ERROR";

export const getRecipesActionStart = () => ({
  type: GET_RECIPES_ACTION_START,
});

export const getRecipesActionSuccess = data => ({
  type: GET_RECIPES_ACTION_SUCCESS,
  data
});

export const getRecipesActionError = error => ({
  type: GET_RECIPES_ACTION_ERROR,
  error
});

export const getRecipesDataAsync = () => {
  return dispatch => {
    dispatch(getRecipesActionStart());
    RecipeService.getRecipesDataAsync().then(response => {
      if (response) {
        dispatch(getRecipesActionSuccess(response))
      } else {
        dispatch(getRecipesActionError(response.error))
      }
    }).catch(error => {
      dispatch(getRecipesActionError(error));
    })
  }
};