import React from "react";
import "./Main.css";
import GridSquare from "./GridSquare";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import modifyShipOrientation from "../actions/modifyShipOrientation";
import resetGameBoard from "../actions/resetGameBoard";
import startGame from "../actions/startGame";
import Ship from "./Ship"
import CompGridSquare from "./CompGridSquare";

const gridArray = new Array(10).fill((new Array(10).fill(0)));

const Main = () => {
    
    const dispatch = useDispatch();
    const shipOrientation = useSelector(state => state.gameStart.shipOrientation);
    const shipLengths =  useSelector(state => state.gameStart.shipLengths);
    const gameStarted = useSelector(state => state.gamePlay.gameStarted);

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
                    <div className="message-box mx-3"></div>
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
                {/* {gameStarted && } */}
            </div>
        </div>
    )
}

export default Main;