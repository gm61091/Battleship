import React, { useEffect } from "react";
import "./Main.css";
import GridSquare from "./GridSquare";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import Ship from "./Ship"
import CompGridSquare from "./CompGridSquare";
import { updateUserWinsInDatabase, updateUserLossesInDatabase } from "../utils/updateUserRecord";
import { updateWins, updateLosses } from "../actions/userActions";
import { modifyShipOrientation, resetGameBoard, resetGame } from "../actions/gameStartActions";
import { startGame, setMessage } from "../actions/gamePlayActions";

const gridArray = new Array(10).fill((new Array(10).fill(0)));

const Main = () => {
    
    const dispatch = useDispatch();

    const { shipLengths, shipOrientation } =  useSelector(state => state.gameStart);
    const { gameStarted, computerShipCoordinates, message, shipCoordinates, gameOver } = useSelector(state => state.gamePlay);
    const { wins, losses, email } = useSelector(state => state.user);

    // useEffect(() => {
        // let shipSunk = false;
        // for (const shipList of computerShipCoordinates) {
        //     if (shipList.length === 0) {
        //         setMessage("Ship sunk!");
        //         shipSunk = true;
        //     }
        // }
        // if (!shipSunk) setMessage("Ship hit!");
        // else if (shipSunk && computerShipCoordinates.length === 1) {
        //     setMessage("You win!");
        //     dispatch(loadUserStats({
        //         wins: userWins + 1,
        //         losses: userLosses 
        //     }))
        //     updateUserWinsInDatabase(userEmail, userWins + 1);
        // }
    // }, [computerShipCoordinates, shipCoordinates])

    useEffect(() => {
        console.log(wins, losses)
        if (gameOver && shipCoordinates.length) {
            setMessage("You win!");
            updateUserWinsInDatabase(email, wins + 1);
            dispatch(updateWins(wins + 1));
        } else if (gameOver) {
            setMessage("You lose!");
            updateUserLossesInDatabase(email, losses + 1);
            dispatch(updateLosses(losses + 1));
        }
    }, [gameOver])

    return (
        <div className="background">
            <h1 className="text-center">Battleship</h1>
            <div className="gameplay">
                <div className="player-board m-3">
                    {gridArray.map((row, rowIndex) => (
                        row.map((col, colIndex) => (
                            <GridSquare 
                                key={`${rowIndex}${colIndex}`} 
                                id={`${rowIndex}${colIndex}`} 
                                row={rowIndex}
                                col={colIndex}
                            />
                        ))
                    ))}
                </div>
                <div className="right-column mt-3">
                    <div className={`${gameStarted ? "computer-board" : "ship-yard"} mx-3`}>
                        {!gameStarted && shipLengths.map((element, index)=>(
                            <Ship
                                key={index} 
                                shipLength={element}
                            />
                        ))}
                        {gameStarted && gridArray.map((row, rowIndex) => (
                            row.map((col, colIndex) => (
                                <CompGridSquare 
                                    key={`${rowIndex}${colIndex}`} 
                                    id={`${rowIndex}${colIndex}`} 
                                />
                            ))
                        ))}
                    </div>
                    <div className="message-box mx-3">
                        {gameStarted && message ? message : ""}
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default Main;