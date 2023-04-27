/**
 * This is a React component that renders the computer board for a battleship game, including ships in
 * the ship yard before the game starts and grid squares during the game.
 * @returns The `ComputerBoard` component is being returned.
 */
import React from "react";
import { useSelector } from "react-redux";

import Ship from "./Ship";
import CompGridSquare from "./CompGridSquare";

const ComputerBoard = ({ gridArray }) => {
  const { gameStarted } = useSelector((state) => state.gamePlay);
  const { shipLengths } = useSelector((state) => state.gameStart);

  return (
    <>
      {!gameStarted && <h2 className="ship-yard-title">Ship Yard</h2>}
      <div className={`${gameStarted ? "computer-board" : "ship-yard"} mx-3`}>
        {!gameStarted &&
          shipLengths.map((element, index) => (
            <Ship key={index} shipLength={element} />
          ))}
        {gameStarted &&
          gridArray.map((row, rowIndex) =>
            row.map((col, colIndex) => (
              <CompGridSquare
                key={`${rowIndex}${colIndex}`}
                id={`${rowIndex}${colIndex}`}
              />
            ))
          )}
      </div>
    </>
  );
};

export default ComputerBoard;
