import types from "./index";

const updateShipLocations = locations => ({
    type: types.UPDATE_SHIP_LOCATIONS,
    data: locations 
})

export default updateShipLocations;