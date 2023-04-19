/* This code exports a function `convertSquareId` that takes a string argument `gridIdx` representing a
coordinate on a grid (e.g. "02" for row 0, column 2) and returns a string representing the same
coordinate in a different format (e.g. "C1" for the same coordinate). The function achieves this by
using a conversion table object `conversionTable` to map the second character of `gridIdx` to a
letter and adding 1 to the first character of `gridIdx` to get the row number. The resulting letter
and number are then concatenated into a single string using template literals. */
const conversionTable = {
  "0": "A",
  "1": "B",
  "2": "C",
  "3": "D",
  "4": "E",
  "5": "F",
  "6": "G",
  "7": "H",
  "8": "I",
  "9": "J",
};

const convertSquareId = (gridIdx) =>
  `${conversionTable[gridIdx[1]]}${parseInt(gridIdx[0]) + 1}`;

export default convertSquareId;
