const determineShipOrientation = (shipIndex, gridIndex) => {
    if (`${gridIndex[0]}${parseInt(gridIndex[1]) + 1}` === shipIndex || `${gridIndex[0]}${parseInt(gridIndex[1]) - 1}` === shipIndex) return "horizontal"
    return "vertical"
}

export default determineShipOrientation