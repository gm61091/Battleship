import selectRandomElement from "./selectRandomElement";
import { up, down, right, left } from "./matrixDirections";

const checkRight = (index, move) => parseInt(index[1]) + move > 9;

const checkLeft = (index, move) => parseInt(index[1]) - move < 0;

const checkUp = (index, move) => parseInt(index[0]) - move < 0;

const checkDown = (index, move) => parseInt(index[0]) + move > 9;

const neighbors = (index, picked, move) => {
    let leftNeighbor, rightNeighbor, upNeighbor, downNeighbor
    for (let x = 0; x < move; x++) {
        if (checkLeft(index, x + 1) || left(index, x + 1) in picked) leftNeighbor = true;
        if (checkRight(index, x + 1) || right(index, x + 1) in picked) rightNeighbor = true;
        if (checkUp(index, x + 1) || up(index, x + 1) in picked) upNeighbor = true;
        if (checkDown(index, x + 1) || down(index, x + 1) in picked) downNeighbor = true;
    }
    return leftNeighbor && rightNeighbor && upNeighbor && downNeighbor
}

const determineSmallestShip = ships => {
    let smallestShip = 5;
    for (const ship of ships) {
        if (ship.length < smallestShip) smallestShip = ship.length;
    }
    return smallestShip;
}

const selectRandomSquare = (gridIndices, picked, ships) => {
    const smallestShip = determineSmallestShip(ships);
    let square = selectRandomElement(gridIndices);
    while (neighbors(square, picked, smallestShip - 1)) {
        square = selectRandomElement(gridIndices);
    }
    return square;
}

export default selectRandomSquare   