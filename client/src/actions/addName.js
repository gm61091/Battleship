import types from "./index";

const addName = name => ({
    type: types.ADD_NAME,
    data: name
})

export default addName;