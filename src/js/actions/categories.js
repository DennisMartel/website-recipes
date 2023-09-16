import CategoryService from "../services/categories.service";

export const GET_CATEGORIES_ACTION_START = "GET_CATEGORIES_ACTION_START";
export const GET_CATEGORIES_ACTION_SUCCESS = "GET_CATEGORIES_ACTION_SUCCESS";
export const GET_CATEGORIES_ACTION_ERROR = "GET_CATEGORIES_ACTION_ERROR";

export const getCategoriesActionStart = () => ({
  type: GET_CATEGORIES_ACTION_START,
});

export const getCategoriesActionSuccess = data => ({
  type: GET_CATEGORIES_ACTION_SUCCESS,
  data
});

export const getCategoriesActionError = error => ({
  type: GET_CATEGORIES_ACTION_ERROR,
  error
});

export const getCategoriesDataAsync = () => {
  return dispatch => {
    dispatch(getCategoriesActionStart());
    CategoryService.getCategoriesDataAsync().then(response => {
      if (response) {
        dispatch(getCategoriesActionSuccess(response))
      } else {
        dispatch(getCategoriesActionError(response.error))
      }
    }).catch(error => {
      dispatch(getCategoriesActionError(error));
    })
  }
};