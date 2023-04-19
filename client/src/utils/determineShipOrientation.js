/**
 * This is a JavaScript function that determines the orientation of a ship on a grid based on its index
 * and the index of a grid cell.
 * @param shipIndex - The index of the ship being placed on the game grid. It is a string representing
 * the position of the ship on the grid, such as "A1" or "D5".
 * @param gridIndex - A string representing the index of a cell on a game grid. The first character
 * represents the row (A-J) and the second character represents the column (1-10).
 * @returns The function `determineShipOrientation` returns a string indicating the orientation of a
 * ship on a game grid. The string will be either "horizontal" or "vertical".
 */
const determineShipOrientation = (shipIndex, gridIndex) => {
  if (
    `${gridIndex[0]}${parseInt(gridIndex[1]) + 1}` === shipIndex ||
    `${gridIndex[0]}${parseInt(gridIndex[1]) - 1}` === shipIndex
  )
    return "horizontal";
  return "vertical";
};

export default determineShipOrientation;
