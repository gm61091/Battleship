import React from "react";
import GridSquare from "./GridSquare";

const PlayerBoard = ({ gridArray }) => {
    return (
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
    )
}

export default PlayerBoard;