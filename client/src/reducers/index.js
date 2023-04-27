/* This is a JavaScript code that is exporting a combined reducer function using the `combineReducers`
method from the Redux library. It is combining multiple reducers (`authReducer`, `userReducer`,
`gameStartReducer`, and `gamePlayReducer`) into a single reducer function called `rootReducer`. This
`rootReducer` function can then be used to create a Redux store that manages the state of the
application. */
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
