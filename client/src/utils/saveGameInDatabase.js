import axios from "axios";

const saveGameInDatabase = (email, savedGame) => {
  axios.post(`/api/saveGame/${email}`, { game: savedGame });
};

export default saveGameInDatabase;
