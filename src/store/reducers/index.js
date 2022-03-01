import { combineReducers } from "redux";

import makadiReducer from "./makadiReduscer";

export default combineReducers({
  makadi: makadiReducer,
});
