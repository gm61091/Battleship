import types from "./index";

const updateShipIndex = index => ({
    type: types.UPDATE_SHIP_INDEX,
    data: index
})

export default updateShipIndex;