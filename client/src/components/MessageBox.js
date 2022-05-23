import React from "react";
import { useSelector } from "react-redux";

import GameMessage from "./GameMessage"
import "./MessageBox.css"

const MessageBox = () => {

    const { gameStarted, gameOver, message, gameSaved } = useSelector(state => state.gamePlay);

    return (
        <div className={`message-box mx-3 px-2${(!gameOver && gameStarted) ? " game-message" : ""}`}>
            {(!gameStarted || gameOver) && !gameSaved && message}
            {!gameOver && gameStarted && <GameMessage />}
            {gameSaved && "Game saved successfully!"}
        </div>
    )
}


export default MessageBox;