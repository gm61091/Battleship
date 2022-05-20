import types from "./index";

const deleteFromShipCoordinates = coordinate => ({
    type: types.DELETE_FROM_SHIP_COORDINATES,
    data: coordinate 
})

export default deleteFromShipCoordinates;