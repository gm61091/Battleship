/**
 * This function generates an array of grid indices in the format of "rowIdxcolIdx" for a 10x10 grid.
 * @returns The function `generateGridIndices` returns an array of strings representing the indices of
 * a 10x10 grid. Each string in the array is a concatenation of the row index and column index, with
 * the format "rowIdxcolIdx".
 */
const generateGridIndices = () => {
  const gridIndices = [];
  for (let rowIdx = 0; rowIdx < 10; rowIdx++) {
    for (let colIdx = 0; colIdx < 10; colIdx++) {
      gridIndices.push(`${rowIdx}${colIdx}`);
    }
  }
  return gridIndices;
};

export default generateGridIndices;
