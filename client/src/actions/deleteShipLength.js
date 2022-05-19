import types from "./index";

const deleteShipLength = length => ({
    type: types.DELETE_SHIP_LENGTH,
    data: length
})

export default deleteShipLength;