import types from "./index";

const loadUserStats = stats => ({
    type: types.LOAD_USER_STATS,
    data: stats
})

export default loadUserStats;