import types from "./index";

const modifyShipLength = length => ({
    type: types.MODIFY_SHIP_LENGTH,
    data: length
})

export default modifyShipLength;