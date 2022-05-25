import selectRandomElement from "./selectRandomElement";
import { up, down, right, left } from "./matrixDirections";

const neighbors = (index, picked) => {
    let leftNeighbor, rightNeighbor, upNeighbor, downNeighbor
    if (index[1] === "0" || left(index) in picked) leftNeighbor = true;
    if (index[1] === "9" || right(index) in picked) rightNeighbor = true;
    if (index[0] === "0" || up(index) in picked) upNeighbor = true;
    if (index[0] === "9" || down(index) in picked) downNeighbor = true;
    return leftNeighbor && rightNeighbor && upNeighbor && downNeighbor
}

const selectRandomSquare = (gridIndices, picked) => {
    let square = selectRandomElement(gridIndices);
    while (neighbors(square, picked)) {
        square = selectRandomElement(gridIndices);
    }
    return square;
}

export default selectRandomSquare