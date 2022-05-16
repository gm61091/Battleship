import types from "./index"

const addToken = token => ({
    type: types.ADD_TOKEN,
    data: token 
})

export default addToken;