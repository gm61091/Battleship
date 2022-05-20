import types from "../actions";
import determineNextIndex from "../utils/determineNextIndex";
import generateGridIndices from "../utils/generateGridIndices";
import selectRandomIndex from "../utils/selectRandomIndex";
import determineShipOrientation from "../utils/determineShipOrientation";

const computerGamePlayReducer = (state, action) => {
    if (!state) {
        state = {
            gridIndices: generateGridIndices(),
            coordinatesPicked: {},
            shipIndex: "",
            targetShipOrientation: "",
            shipCoordinates: []
        }
    }
    switch (action.type) {
        case types.NEXT_COMPUTER_MOVE:
            let [selectedGridIndex, modifyShipOrientation, modifyShipIndex] = [null, null, null];
            if (state.shipIndex) {
                selectedGridIndex = determineNextIndex(state.shipIndex, state.targetShipOrientation, state.coordinatesPicked);
                if (!selectedGridIndex) {
                    modifyShipOrientation = true;
                    selectedGridIndex = determineNextIndex(state.shipIndex, "", state.coordinatesPicked);
                    if (!selectedGridIndex) {
                        modifyShipIndex = true;
                        selectedGridIndex = selectRandomIndex(state.gridIndices);
                    }
                }
            } else selectedGridIndex = selectRandomIndex(state.gridIndices);
            return {
                ...state,
                targetShipOrientation: modifyShipOrientation ? "" : state.targetShipOrientation,
                shipIndex: modifyShipIndex ? "" : state.shipIndex,
                coordinatesPicked: {
                    ...state.coordinatesPicked,
                    [selectedGridIndex]: true
                },
                gridIndices: state.gridIndices.filter(index => index !== selectedGridIndex)
            }
        case types.UPDATE_SHIP_INDEX:
            let [modifyShipIdx, shipOrientation] = [false, null];
            if (state.shipIndex) {
                shipOrientation = determineShipOrientation(state.shipIndex, action.data);
                if (shipOrientation === "error") console.log("error with determine ship orientation in computer game play reducer");
            } else modifyShipIdx = true;
            return {
                ...state,
                shipIndex: modifyShipIdx ? action.data : state.shipIndex,
                targetShipOrientation: shipOrientation || state.targetShipOrientation 
            }
        case types.UPDATE_SHIP_COORDINATES:
            return {
                ...state,
                shipCoordinates: state.shipCoordinates.concat([action.data])
            }
        case types.DELETE_USER_SHIP_COORDINATE:
            let [newShipCoordinates, resetTargetShip] = [[], false];
            for (const shipList of state.shipCoordinates) {
                if (shipList.length === 0) {
                    resetTargetShip = true;
                    continue
                }
                newShipCoordinates.push(shipList.filter(gridIdx => gridIdx !== action.data))
            }
            console.log(newShipCoordinates, resetTargetShip);
            return {
                ...state,
                shipCoordinates: newShipCoordinates,
                shipIndex: resetTargetShip ? "" : state.shipIndex,
                targetShipOrientation: resetTargetShip ? "" : state.targetShipOrientation
            }
        default: 
            return state;
    }
}

export default computerGamePlayReducer;