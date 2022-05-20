import types from "./index";

const deleteUserShipCoordinate = id => ({
    type: types.DELETE_USER_SHIP_COORDINATE,
    data: id
})

export default deleteUserShipCoordinate;