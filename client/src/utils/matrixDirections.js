export const up = (gridIndex, move=1) => `${parseInt(gridIndex[0]) - move}${gridIndex[1]}`;

export const down = (gridIndex, move=1) => `${parseInt(gridIndex[0]) + move}${gridIndex[1]}`;

export const right = (gridIndex, move=1) => `${gridIndex[0]}${parseInt(gridIndex[1]) + move}`;

export const left = (gridIndex, move=1) => `${gridIndex[0]}${parseInt(gridIndex[1]) - move}`;