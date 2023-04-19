/**
 * The function returns a React component that renders a player board using an array of grid squares.
 * @returns The `PlayerBoard` component is being returned, which renders a `div` element with the class
 * name "player-board" and contains multiple `GridSquare` components based on the `gridArray` prop
 * passed to it.
 */
import React from "react";

import GridSquare from "./GridSquare";

const PlayerBoard = ({ gridArray }) => {
  return (
    <div className="player-board m-3">
      {gridArray.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <GridSquare
            key={`${rowIndex}${colIndex}`}
            id={`${rowIndex}${colIndex}`}
            row={rowIndex}
            col={colIndex}
          />
        ))
      )}
    </div>
  );
};

export default PlayerBoard;
