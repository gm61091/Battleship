/**
 * The above code exports four functions that move a grid index up, down, right, or left by a specified
 * amount.
 * @param gridIndex - A string representing the current position on a grid, where the first character
 * is the row and the second character is the column.
 * @param [move=1] - The move parameter is an optional parameter that specifies the number of grid
 * cells to move in the specified direction. Its default value is 1, which means that if no value is
 * provided for the move parameter, the function will move the grid cell by one cell in the specified
 * direction.
 */
export const up = (gridIndex, move = 1) =>
  `${parseInt(gridIndex[0]) - move}${gridIndex[1]}`;

export const down = (gridIndex, move = 1) =>
  `${parseInt(gridIndex[0]) + move}${gridIndex[1]}`;

export const right = (gridIndex, move = 1) =>
  `${gridIndex[0]}${parseInt(gridIndex[1]) + move}`;

export const left = (gridIndex, move = 1) =>
  `${gridIndex[0]}${parseInt(gridIndex[1]) - move}`;
