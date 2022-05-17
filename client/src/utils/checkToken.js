import axios from "axios";
import store from "../store";
import addToken from "../actions/addToken"
import addError from "../actions/addError"
import addName from "../actions/addName"
import addEmail from "../actions/addEmail"
import loadUserStats from "../actions/loadUserStats";

const checkToken = async () => {
    if (localStorage.token) {
      try {
        const response = await axios.get("/protected", {
          headers: {
            "authorization": localStorage.token
          }
        })
        if (response.data.isValid) {
          store.dispatch(addToken(localStorage.token));
          store.dispatch(addName(response.data.name));
          store.dispatch(addEmail(response.data.email));
          store.dispatch(loadUserStats({
            wins: response.data.wins,
            losses: response.data.losses
          }));
        }
      } catch (error) {
        store.dispatch(addError(error));
      }
    }
  }

export default checkToken;