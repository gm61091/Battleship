/**
 * This is a module that exports several functions related to modifying and resetting game board and
 * game state in a Battleship game.
 * @param length - a number representing the length of a ship
 */
import types from "./index";

export const modifyShipLength = (length) => ({
  type: types.MODIFY_SHIP_LENGTH,
  data: length,
});

export const modifyShipOrientation = () => ({
  type: types.MODIFY_SHIP_ORIENTATION,
});

export const modifySelectedSquares = (list) => ({
  type: types.MODIFY_SELECTED_SQUARES,
  data: list,
});

export const updateLastActiveSquare = (id) => ({
  type: types.UPDATE_LAST_ACTIVE_SQUARE,
  data: id,
});

export const updateShipLocations = (locations) => ({
  type: types.UPDATE_SHIP_LOCATIONS,
  data: locations,
});

export const deleteShipLength = (length) => ({
  type: types.DELETE_SHIP_LENGTH,
  data: length,
});

export const resetGameBoard = () => ({
  type: types.RESET_GAME_BOARD,
});

export const resetGame = () => ({
  type: types.RESET_GAME,
});
