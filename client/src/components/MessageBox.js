import React from "react";
import { useSelector } from "react-redux";

import GameMessage from "./GameMessage"
import "./MessageBox.css"

const MessageBox = () => {

    const { gameStarted, gameOver, message } = useSelector(state => state.gamePlay);

    return (
        <div className={`message-box mx-3 px-2${(!gameOver && gameStarted) ? " game-message" : ""}`}>
            {(!gameStarted || gameOver) && message}
            {(!gameOver && gameStarted) && <GameMessage />}
        </div>
    )
}


export default MessageBox;