import types from "../actions";
import generateComputerShipLocations from "../utils/generateComputerShipLocations";

const gamePlayReducer = (state, action) => {
    if (!state) {
        state = {
            gameStarted: false,
            computerShipLocations: {}
        }
    }
    switch (action.type) {
        case types.START_GAME:
            const [computerShipLocations, separatedShipLocations] = generateComputerShipLocations();
            return {
                ...state,
                computerShipLocations: computerShipLocations,
                computerShipCoordinates: separatedShipLocations,
                gameStarted: true
            }
        default: 
            return state;
    }
}

export default gamePlayReducer;