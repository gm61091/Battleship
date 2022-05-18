import { combineReducers } from "redux";
import authReducer from "./authReducer"
import userReducer from "./userReducer";
import gameStartReducer from "./gameStartReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    gameStart: gameStartReducer
})

export default rootReducer;
