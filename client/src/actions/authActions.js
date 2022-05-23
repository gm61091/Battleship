import types from "./index"

export const addToken = token => ({
    type: types.ADD_TOKEN,
    data: token 
})

export const addError = error => ({
    type: types.ADD_TOKEN,
    data: error
})