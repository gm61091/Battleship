import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import { modifyShipOrientation, resetGameBoard, resetGame } from "../actions/gameStartActions";
import { startGame, nextComputerMove, setComputerTurn, computerMessage, loadGame, setGameSaved } from "../actions/gamePlayActions";
import saveGameInDatabase from "../utils/saveGameInDatabase";

const GameBtns = () => {

    const dispatch = useDispatch();
    const { shipOrientation, shipLengths } = useSelector(state => state.gameStart);
    const gamePlayObj = useSelector(state => state.gamePlay);
    const { gameStarted, gameOver } = gamePlayObj;
    const { savedGame, email } = useSelector(state => state.user);
    console.log(savedGame)

    const handleStartGame = () => {
        dispatch(startGame());
        const randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 0) {
            dispatch(setComputerTurn());
            dispatch(computerMessage("Computer goes first"));
            setTimeout(() => {
                dispatch(nextComputerMove());
            }, 1 * 1000)
        }
    }

    const handleSave = () => {
        dispatch(setGameSaved());
        saveGameInDatabase(email, JSON.stringify(gamePlayObj));
        setTimeout(() => {
            dispatch(resetGame());
        }, 5 * 1000)
    }

    return (
        <div className="game-btns mt-3">
            {!gameStarted &&
                <>
                    <Button variant="primary" onClick={() => dispatch(modifyShipOrientation())}>
                        {shipOrientation === "vertical" ? "Horizontal" : "Vertical"}
                    </Button>
                    <Button variant="primary mx-3" onClick={() => dispatch(resetGameBoard())}>
                        Reset Board
                    </Button>
                    {savedGame && 
                        <Button variant="primary mx-3" onClick={() => dispatch(loadGame(savedGame))}>
                            Load Game
                        </Button>
                    }
                </>
            }
            {!shipLengths.length && !gameStarted &&
                <Button variant="primary mx-3" onClick={handleStartGame}>
                    Start Game
                </Button>
            }
            {gameStarted && !gameOver &&
                <Button variant="primary mx-3" onClick={handleSave}>
                    Save Game
                </Button>
            }
            {gameOver &&
                <Button variant="primary mx-3" onClick={() => dispatch(resetGame())}>
                    Reset Game
                </Button>
            }
        </div>
    )
}

export default GameBtns;