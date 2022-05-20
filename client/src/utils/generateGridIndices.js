const generateGridIndices = () => {
    const gridIndices = [];
    for (let rowIdx = 0; rowIdx < 10; rowIdx++) {
        for (let colIdx = 0; colIdx < 10; colIdx++) {
            gridIndices.push(`${rowIdx}${colIdx}`);
        }
    }
    return gridIndices;
}

export default generateGridIndices;