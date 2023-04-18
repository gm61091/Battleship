import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import {
  modifyShipOrientation,
  resetGameBoard,
  resetGame,
} from "../actions/gameStartActions";
import {
  startGame,
  nextComputerMove,
  setComputerTurn,
  computerMessage,
  loadGame,
  setGameSaved,
} from "../actions/gamePlayActions";
import { saveGame } from "../actions/userActions";
import saveGameInDatabase from "../utils/saveGameInDatabase";

const GameBtns = () => {
  const dispatch = useDispatch();
  const gameStartObj = useSelector((state) => state.gameStart);
  const { shipOrientation, shipLengths } = gameStartObj;
  const gamePlayObj = useSelector((state) => state.gamePlay);
  const { gameStarted, gameOver } = gamePlayObj;
  const { savedGame, email } = useSelector((state) => state.user);

  const handleStartGame = () => {
    dispatch(startGame());
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
      dispatch(setComputerTurn());
      dispatch(computerMessage("Computer goes first"));
      setTimeout(() => {
        dispatch(nextComputerMove());
      }, 1 * 1000);
    }
  };

  const handleSave = () => {
    const game = JSON.stringify({
      gamePlay: gamePlayObj,
      gameStart: gameStartObj,
    });
    dispatch(saveGame(game));
    saveGameInDatabase(email, game);
    dispatch(setGameSaved());
    setTimeout(() => {
      dispatch(resetGame());
    }, 3 * 1000);
  };

  return (
    <div className="game-btns mt-3">
      {!gameStarted && (
        <>
          {shipLengths.length !== 0 && (
            <Button
              variant="primary"
              size="lg"
              onClick={() => dispatch(modifyShipOrientation())}
            >
              {shipOrientation === "vertical" ? "Horizontal" : "Vertical"}
            </Button>
          )}
          <Button
            variant="primary mx-3"
            size="lg"
            onClick={() => dispatch(resetGameBoard())}
          >
            Reset Board
          </Button>
          {savedGame && (
            <Button
              variant="primary"
              size="lg"
              onClick={() => dispatch(loadGame(JSON.parse(savedGame)))}
            >
              Load Game
            </Button>
          )}
        </>
      )}
      {!shipLengths.length && !gameStarted && (
        <Button variant="primary mx-3" size="lg" onClick={handleStartGame}>
          Start Game
        </Button>
      )}
      {gameStarted && !gameOver && (
        <>
          <Button variant="primary" size="lg" onClick={handleSave}>
            Save Game
          </Button>
          <Button
            variant="primary ms-3"
            size="lg"
            onClick={() => dispatch(resetGame())}
          >
            Reset Game
          </Button>
        </>
      )}
      {gameOver && (
        <Button
          variant="primary"
          size="lg"
          onClick={() => dispatch(resetGame())}
        >
          Reset Game
        </Button>
      )}
    </div>
  );
};

export default GameBtns;
