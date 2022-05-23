import axios from "axios";

export const updateUserWinsInDatabase = (email, wins) => {
    axios.put(`/api/wins/${email}/${wins}`);
}

export const updateUserLossesInDatabase = (email, losses) => {
    axios.put(`/api/losses/${email}/${losses}`);
}