import {
    GET_CATEGORIES_ACTION_START,
    GET_CATEGORIES_ACTION_SUCCESS,
    GET_CATEGORIES_ACTION_ERROR
  } from "../actions/categories";
  
  const INITIAL_STATE = {
    categories: {
      data: null,
      error: false,
      isError: false,
      ended: false,
    }
  }
  
  export default function reducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
      case GET_CATEGORIES_ACTION_START:
        return {
          ...state,
          categories: {
            data: null,
            error: false,
            isError: false,
            ended: false,
          }
        };
      case GET_CATEGORIES_ACTION_SUCCESS:
        return {
          ...state,
          categories: {
            data: action.data,
            error: false,
            isError: false,
            ended: true,
          }
        };
      case GET_CATEGORIES_ACTION_ERROR:
        return {
          ...state,
          categories: {
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