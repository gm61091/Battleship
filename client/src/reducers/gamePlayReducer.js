import types from "../actions";

const gamePlayReducer = (state, action) => {
    if (!state) {
        state = {
            gameStarted: false
        }
    }
    switch (action.type) {
        case types.START_GAME:
            return {
                ...state,
                gameStarted: true
            }
        default: 
            return state;
    }
}

export default gamePlayReducer;