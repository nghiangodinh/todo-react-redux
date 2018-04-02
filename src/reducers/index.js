import { combineReducers } from "redux";
import todos from "./TodoReducer";
import visibilityFilter from "./VisibilityFilterReducer";

export default combineReducers({
  todos,
  visibilityFilter
});
