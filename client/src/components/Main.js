import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlayerBoard from "./PlayerBoard";
import ComputerBoard from "./ComputerBoard";
import MessageBox from "./MessageBox";
import GameBtns from "./GameBtns";
import { updateWins, updateLosses } from "../actions/userActions";
import { setMessage } from "../actions/gamePlayActions";
import { updateUserWinsInDatabase, updateUserLossesInDatabase } from "../utils/updateUserRecord";
import "./Main.css";

const Main = () => {

    const gridArray = new Array(10).fill((new Array(10).fill(0)));

    const dispatch = useDispatch();
    const { gameOver, shipCoordinates } = useSelector(state => state.gamePlay);
    const { wins, losses, email } = useSelector(state => state.user);

    useEffect(() => {
        if (gameOver && shipCoordinates.length) {
            dispatch(setMessage("You win!"));
            updateUserWinsInDatabase(email, wins + 1);
            dispatch(updateWins(wins + 1));
        } else if (gameOver) {
            dispatch(setMessage("You lose!"));
            updateUserLossesInDatabase(email, losses + 1);
            dispatch(updateLosses(losses + 1));
        }
    }, [gameOver])

    return (
        <div className="background">
            <h1 className="header-txt">Battleship</h1>
            <div className="gameplay">
                <PlayerBoard gridArray={gridArray} />
                <div className="right-column mt-3">
                    <ComputerBoard gridArray={gridArray} />
                    <MessageBox />
                </div>
            </div>
            <GameBtns />
            <footer className="footer-txt">
                <p>Copyright &copy; <a href="https://github.com/jamescr757" target="_blank">James Riddle</a>, <a href="https://github.com/DezSays"  target="_blank">Dezarea Bryan</a>, <a href="https://github.com/gm61091" target="_blank">Gary Merriman</a></p>
            </footer>
        </div>
    )
}

export default Main;