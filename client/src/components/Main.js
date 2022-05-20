import React, { useState, useEffect } from "react";
import "./Main.css";
import GridSquare from "./GridSquare";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import modifyShipOrientation from "../actions/modifyShipOrientation";
import resetGameBoard from "../actions/resetGameBoard";
import startGame from "../actions/startGame";
import resetGame from "../actions/resetGame";
import Ship from "./Ship"
import CompGridSquare from "./CompGridSquare";
import { updateUserWinsInDatabase } from "../utils/updateUserRecord";
import loadUserStats from "../actions/loadUserStats";
import nextComputerMove from "../actions/nextComputerMove";

const gridArray = new Array(10).fill((new Array(10).fill(0)));

const Main = () => {
    
    const dispatch = useDispatch();

    const shipOrientation = useSelector(state => state.gameStart.shipOrientation);
    const shipLengths =  useSelector(state => state.gameStart.shipLengths);
    const gameStarted = useSelector(state => state.gamePlay.gameStarted);
    const computerShipCoordinates = useSelector(state => state.gamePlay.computerShipCoordinates);
    const userMiss = useSelector(state => state.gamePlay.userMiss);
    const userWins = useSelector(state => state.user.wins);
    const userLosses = useSelector(state => state.user.losses);
    const userEmail = useSelector(state => state.user.email);
    const [message, setMessage] = useState("");

    useEffect(() => {
        let shipSunk = false;
        for (const shipList of computerShipCoordinates) {
            if (shipList.length === 0) {
                setMessage("Ship sunk!");
                shipSunk = true;
            }
        }
        if (!shipSunk) setMessage("Ship hit!");
        else if (shipSunk && computerShipCoordinates.length === 1) {
            setMessage("You win!");
            dispatch(loadUserStats({
                wins: userWins + 1,
                losses: userLosses 
            }))
            updateUserWinsInDatabase(userEmail, userWins + 1);
        }
    }, [computerShipCoordinates])

    useEffect(() => {
        if (userMiss) setMessage("Missile missed!");
    }, [userMiss])

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
                {gameStarted && 
                    <Button variant="primary mx-3" onClick={() => dispatch(nextComputerMove())}>
                        Next Move
                    </Button>
                }
                {(message === "You win!" || message === "You lose!") && 
                    <Button variant="primary mx-3" onClick={() => dispatch(resetGame())}>
                        Reset Game
                    </Button>
                }
            </div>
        </div>
    )
}

export default Main;