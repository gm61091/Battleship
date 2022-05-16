import types from "../actions";

const userReducer = (state, action) => {
    if (!state) {
        state = {
            email: "",
            wins: 0,
            losses: 0
        }
    }
    switch (action.type) {
        case types.ADD_EMAIL:
            return {
                ...state,
                email: action.data
            }
        case types.LOAD_USER_STATS:
            return {
                ...state,
                wins: action.data.wins,
                losses: action.data.losses 
            }
        default: 
            return state;
    }
}

export default userReducer;