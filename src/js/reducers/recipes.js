import {
  GET_RECIPES_ACTION_START,
  GET_RECIPES_ACTION_SUCCESS,
  GET_RECIPES_ACTION_ERROR
} from "../actions/recipes";

const INITIAL_STATE = {
  recipes: {
    data: null,
    error: false,
    isError: false,
    ended: false,
  }
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_RECIPES_ACTION_START:
      return {
        ...state,
        recipes: {
          data: null,
          error: false,
          isError: false,
          ended: false,
        }
      };
    case GET_RECIPES_ACTION_SUCCESS:
      return {
        ...state,
        recipes: {
          data: action.data,
          error: false,
          isError: false,
          ended: true,
        }
      };
    case GET_RECIPES_ACTION_ERROR:
      return {
        ...state,
        recipes: {
          data: null,
          error: action.error.response.data,
          isError: true,
          ended: true,
        }
      };
    default:
      return state;
  }
}