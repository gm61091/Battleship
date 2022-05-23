import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateUserLossesInDatabase, updateUserWinsInDatabase } from "../utils/updateUserRecord";
import { updateWins, updateLosses } from "../actions/userActions";
import { setMessage } from "../actions/gamePlayActions";
import GameMessage from "./GameMessage"

const MessageBox = () => {

    const dispatch = useDispatch();
    const { gameStarted, message, shipCoordinates, gameOver } = useSelector(state => state.gamePlay);
    const { wins, losses, email } = useSelector(state => state.user);

    // useEffect(() => {
    //     if (gameOver && shipCoordinates.length) {
    //         setMessage("You win!");
    //         updateUserWinsInDatabase(email, wins + 1);
    //         dispatch(updateWins(wins + 1));
    //     } else if (gameOver) {
    //         setMessage("You lose!");
    //         updateUserLossesInDatabase(email, losses + 1);
    //         dispatch(updateLosses(losses + 1));
    //     }
    // }, [gameOver])

    return (
        <div className="message-box mx-3">
            {(!gameStarted || gameOver) && message}
            {(!gameOver && gameStarted) && <GameMessage />}
        </div>
    )
}


export default MessageBox;