import axios from "axios";
import store from "../store";
import addToken from "../actions/addToken"
import addError from "../actions/addError"

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
        }
      } catch (error) {
        store.dispatch(addError(error));
      }
    }
  }

export default checkToken;