import types from "./index";

export const loadUserStats = stats => ({
    type: types.LOAD_USER_STATS,
    data: stats
})

export const addEmail = email => ({
    type: types.ADD_EMAIL,
    data: email 
})

export const addName = name => ({
    type: types.ADD_NAME,
    data: name
})