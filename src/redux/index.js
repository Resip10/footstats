import { combineReducers } from "redux";
import mainStates from "./mainStates";
import routeStates from "./routeStates";
import competitionStates from "./competitionStates";

export default combineReducers({
  mainStates,
  routeStates,
  competitionStates
});