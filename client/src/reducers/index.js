import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import gameStartReducer from "./gameStartReducer";
import gamePlayReducer from "./gamePlayReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  gameStart: gameStartReducer,
  gamePlay: gamePlayReducer,
});

export default rootReducer;
