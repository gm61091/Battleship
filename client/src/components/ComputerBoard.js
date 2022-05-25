import React from "react";
import { useSelector } from "react-redux";

import Ship from "./Ship";
import CompGridSquare from "./CompGridSquare";

const ComputerBoard = ({ gridArray }) => {

    const { gameStarted } = useSelector(state => state.gamePlay);
    const { shipLengths } = useSelector(state => state.gameStart);

    return (
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
    )
}

export default ComputerBoard;