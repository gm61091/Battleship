import React from "react";
import "./Main.css";
import GridSquare from "./GridSquare";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import modifyShipOrientation from "../actions/modifyShipOrientation";
import resetGameBoard from "../actions/resetGameBoard";
import Ship from "./Ship"

const gridArray = new Array(10).fill((new Array(10).fill(0)));

const Main = () => {
    
    const dispatch = useDispatch();
    const shipOrientation = useSelector(state => state.gameStart.shipOrientation);
    const shipLengths =  useSelector(state => state.gameStart.shipLengths);

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
                    <div className="computer-board mx-3">
                        {shipLengths.map((element, index)=>(
                            <Ship
                                key={index} 
                                shipLength={element}
                            />
                        )

                        )}

    
                    </div>

                    <div className="message-box mx-3">


                    </div>

                </div>
            </div>
            <div className="game-btns mt-3">
                <Button variant="primary" onClick={() => dispatch(modifyShipOrientation())}>
                    {shipOrientation === "vertical" ? "Horizontal" : "Vertical"}
                </Button>
                <Button variant="primary mx-3" onClick={() => dispatch(resetGameBoard())}>
                    Reset Board
                </Button>
            </div>
        </div>
    )
}

export default Main;