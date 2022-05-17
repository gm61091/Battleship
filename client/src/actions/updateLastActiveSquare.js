import types from "./index";

const updateLastActiveSquare = id => ({
    type: types.UPDATE_LAST_ACTIVE_SQUARE,
    data: id
})

export default updateLastActiveSquare;