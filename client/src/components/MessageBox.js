import React from "react";
import { useSelector } from "react-redux";

import GameMessage from "./GameMessage"

const MessageBox = () => {

    const { gameStarted, gameOver, message } = useSelector(state => state.gamePlay);

    return (
        <div className="message-box mx-3">
            {(!gameStarted || gameOver) && message}
            {(!gameOver && gameStarted) && <GameMessage />}
        </div>
    )
}


export default MessageBox;