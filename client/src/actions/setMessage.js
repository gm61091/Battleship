import types from "./index";

const setMessage = message => ({
    type: types.SET_MESSAGE,
    data: message
})

export default setMessage;