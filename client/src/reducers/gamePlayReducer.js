import types from "../actions";
import generateComputerShipLocations from "../utils/generateComputerShipLocations";
import determineNextIndex from "../utils/determineNextIndex";
import generateGridIndices from "../utils/generateGridIndices";
import selectRandomIndex from "../utils/selectRandomIndex";
import determineShipOrientation from "../utils/determineShipOrientation";

const gamePlayReducer = (state, action) => {
    if (!state) {
        state = {
            gameStarted: false,
            computerShipLocations: {},
            computerShipCoordinates: [],
            message: "Position your ships on the grid!",
            gridIndices: generateGridIndices(),
            coordinatesPicked: {},
            shipIndex: "",
            lastHit: "",
            targetShipOrientation: "",
            shipCoordinates: [], 
            gameOver: false,
            userMessage: "",
            computerMessage: ""
        }
    }
    switch (action.type) {
        case types.START_GAME:
            const [computerShipLocations, separatedShipLocations] = generateComputerShipLocations();
            console.log(separatedShipLocations)
            return {
                ...state,
                userMessage: "Click grid square on right to fire torpedo",
                computerShipLocations: computerShipLocations,
                computerShipCoordinates: separatedShipLocations,
                gameStarted: true
            }
        case types.DELETE_FROM_SHIP_COORDINATES:
            const newShipCoordinates = [];
            for (const shipList of state.computerShipCoordinates) {
                const newShipList = shipList.filter(gridIdx => gridIdx !== action.data)
                if (newShipList.length) newShipCoordinates.push(newShipList)
            }
            console.log(newShipCoordinates);
            return {
                ...state,
                computerShipCoordinates: newShipCoordinates,
                gameOver: newShipCoordinates.length === 0
            }
        case types.NEXT_COMPUTER_MOVE:
            let [selectedGridIndex, modifyShipOrientation, modifyShipIndex] = [null, null, null];
            if (state.shipIndex) {
                selectedGridIndex = determineNextIndex(state.shipIndex, state.lastHit, state.targetShipOrientation, state.coordinatesPicked);
                if (!selectedGridIndex) {
                    modifyShipOrientation = true;
                    selectedGridIndex = determineNextIndex(state.shipIndex, "", "", state.coordinatesPicked);
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
            let [modifyShipIdx, shipOrientation, lastHit] = [false, "", ""];
            if (state.shipIndex && !state.targetShipOrientation) {
                shipOrientation = determineShipOrientation(state.shipIndex, action.data);
                lastHit = action.data;
            } else if (state.shipIndex && state.targetShipOrientation) lastHit = action.data;
            else modifyShipIdx = true;
            return {
                ...state,
                shipIndex: modifyShipIdx ? action.data : state.shipIndex,
                targetShipOrientation: shipOrientation || state.targetShipOrientation,
                lastHit: lastHit
            }
        case types.UPDATE_LAST_HIT:
            return {
                ...state,
                lastHit: ""
            }
        case types.UPDATE_SHIP_COORDINATES:
            return {
                ...state,
                shipCoordinates: state.shipCoordinates.concat([action.data])
            }
        case types.DELETE_USER_SHIP_COORDINATE:
            let [newUserShipCoordinates, resetTargetShip] = [[], false];
            for (const shipList of state.shipCoordinates) {
                const newShipList = shipList.filter(gridIdx => gridIdx !== action.data)
                if (newShipList.length === 0) resetTargetShip = true;
                else newUserShipCoordinates.push(newShipList);
            }
            console.log(newUserShipCoordinates);
            return {
                ...state,
                shipCoordinates: newUserShipCoordinates,
                shipIndex: resetTargetShip ? "" : state.shipIndex,
                targetShipOrientation: resetTargetShip ? "" : state.targetShipOrientation,
                lastHit: resetTargetShip ? "" : state.lastHit,
                gameOver: newUserShipCoordinates.length === 0
            }
        case types.RESET_GAME:
            return {
                gameStarted: false,
                computerShipLocations: {},
                computerShipCoordinates: [],
                message: "",
                gridIndices: generateGridIndices(),
                coordinatesPicked: {},
                shipIndex: "",
                lastHit: "",
                targetShipOrientation: "",
                shipCoordinates: [],
                gameOver: false,
                userMessage: "",
                computerMessage: ""
            }
        case types.SET_MESSAGE:
            return {
                ...state,
                message: action.data
            }
        case types.USER_MESSAGE:
            return {
                ...state,
                userMessage: action.data
            }
        case types.COMPUTER_MESSAGE:
            return {
                ...state,
                computerMessage: action.data
            }
        
        default: 
            return state;
            
    }
}

export default gamePlayReducer;