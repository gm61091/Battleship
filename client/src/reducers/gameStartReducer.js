import types from "../actions";

const gameStartReducer = (state, action) => {
    if (!state) {
        state = {
            shipLength: 5,
            selectedSquares: [],
            shipOrientation: "horizontal",
            shipLocations: {},
            lastActiveSquare: ""
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
        default: 
            return state;
    }
}

export default gameStartReducer;