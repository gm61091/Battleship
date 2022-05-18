import types from "./index";

const modifySelectedSquares = list => ({
    type: types.MODIFY_SELECTED_SQUARES,
    data: list
})

export default modifySelectedSquares;