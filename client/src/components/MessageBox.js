import React from "react";
import { useSelector } from "react-redux";

import GameMessage from "./GameMessage"
import "./MessageBox.css"

const MessageBox = () => {

    const { gameStarted, gameOver, message, gameSaved } = useSelector(state => state.gamePlay);
    const { wins, losses } = useSelector(state => state.user);

    return (
        <div className="message-container">
            <p className="mb-0 user-record">
                Wins <span className="number-span">{wins}</span> 
                &nbsp; Losses <span className="number-span">{losses}</span>
            </p>
            <div className={`message-box mx-3 px-2${(!gameOver && gameStarted) ? " game-message" : ""}`}>
                {(!gameStarted || gameOver) && !gameSaved && message}
                {!gameOver && gameStarted && <GameMessage />}
                {gameSaved && "Game saved successfully!"}
            </div>
            <p className="mb-0 spacing">Wins: Losses:</p>
        </div> 
    )
}


export default MessageBox;