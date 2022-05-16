import types from "./index";

const addEmail = email => ({
    type: types.ADD_EMAIL,
    data: email 
})

export default addEmail;