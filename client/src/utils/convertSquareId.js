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
    "9": "J"
}

const convertSquareId = gridIdx => `${conversionTable[gridIdx[1]]}${parseInt(gridIdx[0]) + 1}`;

export default convertSquareId;