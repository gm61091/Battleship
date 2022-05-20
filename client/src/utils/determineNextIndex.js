import selectRandomIndex from "./selectRandomIndex"

const determineNextIndex = (gridIdx, coordinatesPicked, shipOrientation) => {
    const possibilities = [];
    if (!shipOrientation) {
        if (gridIdx[1] < 9 && !(`${gridIdx[0]}${parseInt(gridIdx[1]) + 1}` in coordinatesPicked)) {
            possibilities.push(`${gridIdx[0]}${parseInt(gridIdx[1]) + 1}`)
        }
        if (gridIdx[1] > 0 && !(`${gridIdx[0]}${parseInt(gridIdx[1]) - 1}` in coordinatesPicked)) {
            possibilities.push(`${gridIdx[0]}${parseInt(gridIdx[1]) - 1}`)
        }
        if (gridIdx[0] < 9 && !(`${parseInt(gridIdx[0]) + 1}${gridIdx[1]}` in coordinatesPicked)) {
            possibilities.push(`${parseInt(gridIdx[0]) + 1}${gridIdx[1]}`)
        }
        if (gridIdx[0] > 0 && !(`${parseInt(gridIdx[0]) - 1}${gridIdx[1]}` in coordinatesPicked)) {
            possibilities.push(`${parseInt(gridIdx[0]) - 1}${gridIdx[1]}`)
        }
    } else {
        if (shipOrientation === "horizontal") {
            if (gridIdx[1] < 9 && !(`${gridIdx[0]}${parseInt(gridIdx[1]) + 1}` in coordinatesPicked)) {
                possibilities.push(`${gridIdx[0]}${parseInt(gridIdx[1]) + 1}`)
            }
            if (gridIdx[1] > 0 && !(`${gridIdx[0]}${parseInt(gridIdx[1]) - 1}` in coordinatesPicked)) {
                possibilities.push(`${gridIdx[0]}${parseInt(gridIdx[1]) - 1}`)
            }
        } else {
            if (gridIdx[0] < 9 && !(`${parseInt(gridIdx[0]) + 1}${gridIdx[1]}` in coordinatesPicked)) {
                possibilities.push(`${parseInt(gridIdx[0]) + 1}${gridIdx[1]}`)
            }
            if (gridIdx[0] > 0 && !(`${parseInt(gridIdx[0]) - 1}${gridIdx[1]}` in coordinatesPicked)) {
                possibilities.push(`${parseInt(gridIdx[0]) - 1}${gridIdx[1]}`)
            }
        }
    }
    if (possibilities.length === 0) return "";
    else return selectRandomIndex(possibilities);
}

export default determineNextIndex