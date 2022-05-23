import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import { modifyShipOrientation, resetGameBoard, resetGame } from "../actions/gameStartActions";
import { startGame, nextComputerMove, setComputerTurn, computerMessage } from "../actions/gamePlayActions";

const GameBtns = () => {

    const dispatch = useDispatch();
    const { shipOrientation, shipLengths } = useSelector(state => state.gameStart);
    const { gameStarted, gameOver } = useSelector(state => state.gamePlay);

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
                </>
            }
            {!shipLengths.length && !gameStarted &&
                <Button variant="primary mx-3" onClick={handleStartGame}>
                    Start Game
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