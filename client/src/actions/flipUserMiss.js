import types from "./index";

const flipUserMiss = boolean => ({
    type: types.FLIP_USER_MISS,
    data: boolean
})

export default flipUserMiss;