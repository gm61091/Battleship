import types from "../actions";

const userReducer = (state, action) => {
    if (!state) {
        state = {
            email: "",
            name: "",
            wins: 0,
            losses: 0,
            savedGame: false
        }
    }
    switch (action.type) {
        case types.LOAD_USER_INFO:
            return {
                ...action.data
            }
        case types.UPDATE_USER_WINS:
            return {
                ...state,
                wins: action.data
            }
        case types.UPDATE_USER_LOSSES:
            return {
                ...state,
                losses: action.data
            }
        case types.SAVE_GAME:
            return {
                ...state,
                savedGame: action.data
            }
        default: 
            return state;
    }
}

export default userReducer;