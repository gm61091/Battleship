import { combineReducers } from "redux";
import authReducer from "./authReducer"
import userReducer from "./userReducer";
import gameStartReducer from "./gameStartReducer";
import gamePlayReducer from "./gamePlayReducer";
import computerGamePlayReducer from "./computerGamePlayReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    gameStart: gameStartReducer,
    gamePlay: gamePlayReducer,
    computerGamePlay: computerGamePlayReducer
})

export default rootReducer;
