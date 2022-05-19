import types from "../actions";

const gameStartReducer = (state, action) => {
    if (!state) {
        state = {
            shipLength: 5,
            selectedSquares: [],
            shipOrientation: "horizontal",
            shipLocations: {},
            lastActiveSquare: "",
            shipLengths: [5, 4, 3, 3, 2]
        }
    }
    switch (action.type) {
        case types.MODIFY_SHIP_LENGTH:
            return {
                ...state,
                shipLength: action.data
            }
        case types.MODIFY_SHIP_ORIENTATION:
            return {
                ...state,
                shipOrientation: state.shipOrientation === "vertical" ? "horizontal" : "vertical"
            }
        case types.MODIFY_SELECTED_SQUARES:
            return {
                ...state,
                selectedSquares: action.data
            }
        case types.UPDATE_LAST_ACTIVE_SQUARE:
            return {
                ...state, 
                lastActiveSquare: action.data
            }
        case types.UPDATE_SHIP_LOCATIONS:
            return {
                ...state,
                shipLocations: {
                    ...state.shipLocations,
                    ...action.data
                }
            }
        case types.DELETE_SHIP_LENGTH:
            const newShipLengths = [];
            let matchingLength = false;
            for (const length of state.shipLengths) {
                if (length === action.data && !matchingLength) {
                    matchingLength = true;
                } else newShipLengths.push(length);
            }
            return {
                ...state,
                shipLengths: newShipLengths,
                shipLength: newShipLengths[0] || 0
            }
        case types.RESET_GAME_BOARD:
            return {
                shipLength: 5,
                selectedSquares: [],
                shipOrientation: "horizontal",
                shipLocations: {},
                lastActiveSquare: "",
                shipLengths: [5, 4, 3, 3, 2]
            }
        default: 
            return state;
    }
}

export default gameStartReducer;