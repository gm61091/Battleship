import types from "../actions";
import generateComputerShipLocations from "../utils/generateComputerShipLocations";
import determineNextIndex from "../utils/determineNextIndex";
import generateGridIndices from "../utils/generateGridIndices";
import determineShipOrientation from "../utils/determineShipOrientation";
import selectRandomSquare from "../utils/selectRandomSquare";

const gamePlayReducer = (state, action) => {
    if (!state) {
        state = {
            gameStarted: false,
            computerShipLocations: {},
            computerShipCoordinates: [],
            message: "Position your ships on the grid!",
            gridIndices: generateGridIndices(),
            coordinatesPicked: {},
            userSelections: {},
            shipIndex: "",
            lastHit: "",
            targetShipOrientation: "",
            shipCoordinates: [], 
            startingShipCoordinates: [],
            gameOver: false,
            userMessage: "",
            computerMessage: "",
            computerTurn: false,
            sunkShips: {},
            computerSunkShips: {},
            computerStartingCoordinates: [],
            hitList: [],
            gameSaved: false
        }
    }
    switch (action.type) {
        case types.START_GAME:
            const [computerShipLocations, separatedShipLocations] = generateComputerShipLocations();
            return {
                ...state,
                userMessage: "Click grid square to fire torpedo",
                computerShipLocations: computerShipLocations,
                computerShipCoordinates: separatedShipLocations,
                computerStartingCoordinates: separatedShipLocations,
                startingShipCoordinates: state.shipCoordinates,
                gameStarted: true
            }
        case types.LOAD_GAME:
            return {
                ...action.data.gamePlay
            }
        case types.DELETE_FROM_SHIP_COORDINATES:
            const newShipCoordinates = [];
            for (const shipList of state.computerShipCoordinates) {
                const newShipList = shipList.filter(gridIdx => gridIdx !== action.data)
                if (newShipList.length) newShipCoordinates.push(newShipList)
            }
            return {
                ...state,
                computerShipCoordinates: newShipCoordinates,
                gameOver: newShipCoordinates.length === 0
            }
        case types.SET_COMPUTER_TURN:
            return {
                ...state,
                computerTurn: true
            }
        case types.NEXT_COMPUTER_MOVE:
            if (!state.gameOver) {
                let [selectedGridIndex, modifyShipOrientation, modifyShipIndex] = [null, null, null];
                if (!state.shipIndex && !state.lastHit && state.hitList.length > 0) state.shipIndex = state.hitList[0];
                if (state.shipIndex) {
                    selectedGridIndex = determineNextIndex(state.shipIndex, state.lastHit, state.targetShipOrientation, state.coordinatesPicked);
                    if (!selectedGridIndex) {
                        modifyShipOrientation = true;
                        selectedGridIndex = determineNextIndex(state.shipIndex, "", "", state.coordinatesPicked);
                        if (!selectedGridIndex) {
                            modifyShipIndex = true;
                            selectedGridIndex = selectRandomSquare(state.gridIndices, state.coordinatesPicked, state.shipCoordinates);
                        }
                    }
                } else selectedGridIndex = selectRandomSquare(state.gridIndices, state.coordinatesPicked, state.shipCoordinates);
                console.log(selectedGridIndex);
                return {
                    ...state,
                    targetShipOrientation: modifyShipOrientation ? "" : state.targetShipOrientation,
                    shipIndex: modifyShipIndex ? "" : state.shipIndex,
                    coordinatesPicked: {
                        ...state.coordinatesPicked,
                        [selectedGridIndex]: true
                    },
                    gridIndices: state.gridIndices.filter(index => index !== selectedGridIndex),
                    computerTurn: false
                }
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
                lastHit: lastHit,
                hitList: action.data in state.computerSunkShips ? state.hitList : state.hitList.concat([action.data])
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
                message: "Position your ships on the grid!",
                gridIndices: generateGridIndices(),
                coordinatesPicked: {},
                shipIndex: "",
                lastHit: "",
                targetShipOrientation: "",
                shipCoordinates: [],
                gameOver: false,
                userMessage: "",
                computerMessage: "",
                gameSaved: false,
                gameStarted: false,
                userSelections: {},
                startingShipCoordinates: [],
                computerTurn: false,
                sunkShips: {},
                computerSunkShips: {},
                computerStartingCoordinates: [],
                hitList: []
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
        case types.ADD_TO_SUNK_SHIPS:
            let shipIdx;
            for (let idx = 0; idx < state.computerStartingCoordinates.length; idx++) {
                for (const coordinate of state.computerStartingCoordinates[idx]) {
                    if (coordinate === action.data) shipIdx = idx;
                }
            }
            const sunkShipCoordinates = {};
            for (const coordinate of state.computerStartingCoordinates[shipIdx]) {
                sunkShipCoordinates[coordinate] = true;
            }
            return {
                ...state,
                sunkShips: {
                    ...state.sunkShips,
                    ...sunkShipCoordinates
                }
            }
        case types.ADD_TO_COMPUTER_SUNK_SHIPS:
            let shipIndex;
            for (let idx = 0; idx < state.startingShipCoordinates.length; idx++) {
                for (const coordinate of state.startingShipCoordinates[idx]) {
                    if (coordinate === action.data) shipIndex = idx;
                }
            }
            const sunkShipIds = {};
            for (const coordinate of state.startingShipCoordinates[shipIndex]) {
                sunkShipIds[coordinate] = true;
            }
            return {
                ...state,
                computerSunkShips: {
                    ...state.computerSunkShips,
                    ...sunkShipIds
                },
                hitList: state.hitList.filter(coordinate => !(coordinate in sunkShipIds))
            }
        case types.SET_GAME_SAVED:
            return {
                ...state,
                gameSaved: true,
                gameOver: true
            } 
        case types.ADD_TO_USER_SELECTIONS:
            return {
                ...state,
                userSelections: {
                    ...state.userSelections,
                    [action.data]: true
                }
            }
        default: 
            return state;
            
    }
}

export default gamePlayReducer;