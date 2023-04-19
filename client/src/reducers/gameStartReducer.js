/**
 * This is a reducer function that handles various actions related to the game start state in a
 * battleship game.
 * @param state - The current state of the game, which is an object containing various properties such
 * as shipLength, selectedSquares, shipOrientation, shipLocations, lastActiveSquare, and shipLengths.
 * @param action - The action parameter is an object that contains information about the action being
 * dispatched, including the type of action and any additional data needed to update the state.
 * @returns The gameStartReducer function is returning an updated state object based on the action type
 * and data passed in.
 */
import types from "../actions";

const gameStartReducer = (state, action) => {
  if (!state) {
    state = {
      shipLength: 5,
      selectedSquares: [],
      shipOrientation: "horizontal",
      shipLocations: {},
      lastActiveSquare: "",
      shipLengths: [5, 4, 3, 3, 2],
    };
  }
  switch (action.type) {
    case types.LOAD_GAME:
      return {
        ...action.data.gameStart,
      };
    case types.MODIFY_SHIP_LENGTH:
      return {
        ...state,
        shipLength: action.data,
      };
    case types.MODIFY_SHIP_ORIENTATION:
      return {
        ...state,
        shipOrientation:
          state.shipOrientation === "vertical" ? "horizontal" : "vertical",
      };
    case types.MODIFY_SELECTED_SQUARES:
      return {
        ...state,
        selectedSquares: action.data,
      };
    case types.UPDATE_LAST_ACTIVE_SQUARE:
      return {
        ...state,
        lastActiveSquare: action.data,
      };
    case types.UPDATE_SHIP_LOCATIONS:
      return {
        ...state,
        shipLocations: {
          ...state.shipLocations,
          ...action.data,
        },
      };
    case types.DELETE_SHIP_LENGTH:
      const newShipLengths = [];
      let matchingLength = false;
      for (const length of state.shipLengths) {
        if (length === action.data && !matchingLength) {
          matchingLength = true;
        } else newShipLengths.push(length);
      }
      return {
        ...state,
        shipLengths: newShipLengths,
        shipLength: newShipLengths[0] || 0,
      };
    case types.RESET_GAME_BOARD:
    case types.RESET_GAME:
      return {
        shipLength: 5,
        selectedSquares: [],
        shipOrientation: "horizontal",
        shipLocations: {},
        shipCoordinates: [],
        lastActiveSquare: "",
        shipLengths: [5, 4, 3, 3, 2],
      };
    default:
      return state;
  }
};

export default gameStartReducer;
