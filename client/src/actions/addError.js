import types from "./index"

const addError = error => ({
    type: types.ADD_TOKEN,
    data: error
})

export default addError;