import types from "../actions";

const authReducer = (state, action) => {
    if (!state) {
        state = {
            auth: "",
            error: null 
        }
    }
    switch (action.type) {
        case types.ADD_TOKEN: 
            return {
                ...state,
                auth: action.data
            }
        case types.ADD_ERROR:
            return {
                ...state,
                error: action.data
            }
        default:
            return state 
    }
}

export default authReducer;