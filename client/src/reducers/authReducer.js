/**
 * This is a reducer function that handles state changes for authentication-related actions in a
 * React/Redux application.
 * @param state - The current state of the authReducer. If no state is provided, it initializes to an
 * object with empty string for auth and null for error.
 * @param action - The `action` parameter is an object that describes the action being performed. It
 * has a `type` property that indicates the type of action being performed, and a `data` property that
 * contains any data associated with the action. The `switch` statement in the function checks the
 * `type` property
 * @returns The authReducer function is returning a new state object based on the action type received.
 * If the action type is ADD_TOKEN, it returns a new state object with the auth property set to the
 * data property of the action object. If the action type is ADD_ERROR, it returns a new state object
 * with the error property set to the data property of the action object. If the action type is not
 * recognized
 */
import types from "../actions";

const authReducer = (state, action) => {
  if (!state) {
    state = {
      auth: "",
      error: null,
    };
  }
  switch (action.type) {
    case types.ADD_TOKEN:
      return {
        ...state,
        auth: action.data,
      };
    case types.ADD_ERROR:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
