import { combineReducers } from "redux";
import recipes from "./recipes";
import categories from "./categories";

export default combineReducers({
  recipes,
  categories
});