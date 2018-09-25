import { combineReducers } from "redux";
import mainStates from "./mainStates";
import routeStates from "./routeStates";

export default combineReducers({
  mainStates,
  routeStates
});