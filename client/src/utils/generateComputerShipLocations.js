const generateGridIdx = length => {
    const gridStartIdx = Math.floor(Math.random() * (10 - length + 1));
    const gridIdx = Math.floor(Math.random() * 10);
    return [gridStartIdx, gridIdx]
}

const generateComputerShipLocations = () => {
    const shipLengths = [5, 4, 3, 3, 2];
    const orientation = ["horizontal", "vertical"];
    const computerShipLocations = {};
    const separatedShipLocations = [];
    for (let idx = 0; idx < shipLengths.length; idx++) {
        const length = shipLengths[idx];
        let shipLocations = [];
        let overlapsAnotherShip = true;
        while (overlapsAnotherShip) {   
            shipLocations = [];
            const orientationIdx = Math.floor(Math.random() * 2);
            if (orientation[orientationIdx] === "horizontal") {
                const [colStartIdx, rowIdx] = generateGridIdx(length);
                for (let count = 0; count < length; count++) {
                    shipLocations.push(`${rowIdx}${colStartIdx + count}`);
                }
            } else if (orientation[orientationIdx] === "vertical") {
                const [rowStartIdx, colIdx] = generateGridIdx(length);
                for (let count = 0; count < length; count++) {
                    shipLocations.push(`${rowStartIdx + count}${colIdx}`);
                }
            }
            overlapsAnotherShip = false;
            for (const location of shipLocations) {
                if (location in computerShipLocations) {
                    overlapsAnotherShip = true;
                    break;
                } 
            }
        }
        separatedShipLocations.push([]);
        for (const location of shipLocations) {
            computerShipLocations[location] = true;
            separatedShipLocations[idx].push(location);
        }
    }
    return [computerShipLocations, separatedShipLocations];
}

export default generateComputerShipLocations