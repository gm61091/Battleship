import types from "../actions";
import generateComputerShipLocations from "../utils/generateComputerShipLocations";

const gamePlayReducer = (state, action) => {
    if (!state) {
        state = {
            gameStarted: false,
            computerShipLocations: {},
            computerShipCoordinates: []
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
        default: 
            return state;
    }
}

export default gamePlayReducer;