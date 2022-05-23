import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";


import { modifyShipOrientation, resetGameBoard, resetGame } from "../actions/gameStartActions";
import { startGame } from "../actions/gamePlayActions";

const GameBtns = () => {

    const dispatch = useDispatch();
    const { shipOrientation, shipLengths } = useSelector(state => state.gameStart);
    const { gameStarted, computerShipCoordinates, message, shipCoordinates, gameOver } = useSelector(state => state.gamePlay);

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
                <Button variant="primary mx-3" onClick={() => dispatch(startGame())}>
                    Start Game
                </Button>
            }
            {/* {gameStarted && 
                <Button variant="primary mx-3" onClick={() => dispatch(nextComputerMove())}>
                    Next Move
                </Button>
            } */}
            {gameOver && 
                <Button variant="primary mx-3" onClick={() => dispatch(resetGame())}>
                    Reset Game
                </Button>
            }
        </div>
    )
}

export default GameBtns;