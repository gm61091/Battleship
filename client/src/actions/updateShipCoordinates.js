import types from "./index";

const updateShipCoordinates = coordinates => ({
    type: types.UPDATE_SHIP_COORDINATES,
    data: coordinates
})

export default updateShipCoordinates;