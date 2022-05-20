const determineShipOrientation = (shipIndex, gridIndex) => {
    if (`${gridIndex[0]}${parseInt(gridIndex[1]) + 1}` === shipIndex || `${gridIndex[0]}${parseInt(gridIndex[1]) - 1}` === shipIndex) return "horizontal"
    else if (`${parseInt(gridIndex[0]) + 1}${gridIndex[1]}` === shipIndex || `${parseInt(gridIndex[0]) - 1}${gridIndex[1]}` === shipIndex) return "vertical"
    return "error"
}

export default determineShipOrientation