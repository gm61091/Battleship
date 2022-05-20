import types from "../actions";
import generateComputerShipLocations from "../utils/generateComputerShipLocations";

const gamePlayReducer = (state, action) => {
    if (!state) {
        state = {
            gameStarted: false,
            computerShipLocations: {},
            computerShipCoordinates: [],
            userMiss: ""
        }
    }
    switch (action.type) {
        case types.START_GAME:
            const [computerShipLocations, separatedShipLocations] = generateComputerShipLocations();
            console.log(separatedShipLocations)
            return {
                ...state,
                computerShipLocations: computerShipLocations,
                computerShipCoordinates: separatedShipLocations,
                gameStarted: true
            }
        case types.DELETE_FROM_SHIP_COORDINATES:
            const newShipCoordinates = [];
            for (const shipList of state.computerShipCoordinates) {
                if (shipList.length === 0) continue
                newShipCoordinates.push(shipList.filter(gridIdx => gridIdx !== action.data))
            }
            console.log(newShipCoordinates);
            return {
                ...state,
                computerShipCoordinates: newShipCoordinates 
            }
        case types.FLIP_USER_MISS:
            return {
                ...state,
                userMiss: action.data
            }
        case types.RESET_GAME:
            return {
                gameStarted: false,
                computerShipLocations: {},
                computerShipCoordinates: [],
                userMiss: ""
            }
        default: 
            return state;
    }
}

export default gamePlayReducer;