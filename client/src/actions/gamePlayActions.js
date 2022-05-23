import types from "./index";

export const startGame = () => ({
    type: types.START_GAME
})

export const deleteFromShipCoordinates = coordinate => ({
    type: types.DELETE_FROM_SHIP_COORDINATES,
    data: coordinate 
})

export const setComputerTurn = () => ({
    type: types.SET_COMPUTER_TURN
})

export const nextComputerMove = () => ({
    type: types.NEXT_COMPUTER_MOVE
})

export const updateShipIndex = index => ({
    type: types.UPDATE_SHIP_INDEX,
    data: index
})

export const updateLastHit = () => ({
    type: types.UPDATE_LAST_HIT
})

export const updateShipCoordinates = coordinates => ({
    type: types.UPDATE_SHIP_COORDINATES,
    data: coordinates
})

export const deleteUserShipCoordinate = id => ({
    type: types.DELETE_USER_SHIP_COORDINATE,
    data: id
})

export const resetGame = () => ({
    type: types.RESET_GAME
})

export const setMessage = message => ({
    type: types.SET_MESSAGE,
    data: message
})

export const userMessage = userMessage => ({
    type: types.USER_MESSAGE,
    data: userMessage
})

export const computerMessage = computerMessage => ({
    type: types.COMPUTER_MESSAGE,
    data: computerMessage
})

export const addToSunkShips = id => ({
    type: types.ADD_TO_SUNK_SHIPS,
    data: id
})
