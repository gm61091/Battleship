import selectRandomIndex from "./selectRandomIndex"

const up = gridIndex => `${parseInt(gridIndex[0]) - 1}${gridIndex[1]}`;

const down = gridIndex => `${parseInt(gridIndex[0]) + 1}${gridIndex[1]}`;

const right = gridIndex => `${gridIndex[0]}${parseInt(gridIndex[1]) + 1}`;

const left = gridIndex => `${gridIndex[0]}${parseInt(gridIndex[1]) - 1}`;

const determineNextIndex = (shipIdx, lastHit, shipOrientation, coordinatesPicked) => {
    const possibilities = [];
    const gridIdx = lastHit || shipIdx;
    if (!shipOrientation) {
        if (gridIdx[1] < 9 && !(right(gridIdx) in coordinatesPicked)) {
            possibilities.push(right(gridIdx))
        }
        if (gridIdx[1] > 0 && !(left(gridIdx) in coordinatesPicked)) {
            possibilities.push(left(gridIdx))
        }
        if (gridIdx[0] < 9 && !(down(gridIdx) in coordinatesPicked)) {
            possibilities.push(down(gridIdx))
        }
        if (gridIdx[0] > 0 && !(up(gridIdx) in coordinatesPicked)) {
            possibilities.push(up(gridIdx))
        }
    } else {
        if (shipOrientation === "horizontal") {
            if (gridIdx[1] < 9 && !(right(gridIdx) in coordinatesPicked)) {
                possibilities.push(right(gridIdx))
            }
            if (gridIdx[1] > 0 && !(left(gridIdx) in coordinatesPicked)) {
                possibilities.push(left(gridIdx))
            }
        } else {
            if (gridIdx[0] < 9 && !(down(gridIdx) in coordinatesPicked)) {
                possibilities.push(down(gridIdx))
            }
            if (gridIdx[0] > 0 && !(up(gridIdx) in coordinatesPicked)) {
                possibilities.push(up(gridIdx))
            }
        }
    }
    if (possibilities.length === 0 && lastHit) return determineNextIndex(shipIdx, "", shipOrientation, coordinatesPicked);
    else if (possibilities.length === 0 && shipOrientation) return "";
    else return selectRandomIndex(possibilities);
}

export default determineNextIndex