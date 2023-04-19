/**
 * This is a user reducer function that handles different actions such as loading user info, updating
 * user wins and losses, and saving a game.
 * @param state - The current state of the userReducer. If it is undefined, it will be initialized with
 * default values.
 * @param action - The action parameter is an object that contains information about the action being
 * dispatched, including the type of action and any additional data needed to update the state.
 * @returns The userReducer function is returning a new state object based on the action type that is
 * passed in. If the action type is LOAD_USER_INFO, it returns a new state object with the data from
 * the action. If the action type is UPDATE_USER_WINS or UPDATE_USER_LOSSES, it returns a new state
 * object with the updated wins or losses data. If the action type is SAVE_GAME,
 */
import types from "../actions";

const userReducer = (state, action) => {
  if (!state) {
    state = {
      email: "",
      name: "",
      wins: 0,
      losses: 0,
      savedGame: false,
    };
  }
  switch (action.type) {
    case types.LOAD_USER_INFO:
      return {
        ...action.data,
      };
    case types.UPDATE_USER_WINS:
      return {
        ...state,
        wins: action.data,
      };
    case types.UPDATE_USER_LOSSES:
      return {
        ...state,
        losses: action.data,
      };
    case types.SAVE_GAME:
      return {
        ...state,
        savedGame: action.data,
      };
    default:
      return state;
  }
};

export default userReducer;
