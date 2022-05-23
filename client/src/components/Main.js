import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlayerBoard from "./PlayerBoard";
import ComputerBoard from "./ComputerBoard";
import MessageBox from "./MessageBox";
import GameBtns from "./GameBtns";
import "./Main.css";

const Main = () => {

    const gridArray = new Array(10).fill((new Array(10).fill(0)));

    return (
        <div className="background">
            <h1 className="text-center">Battleship</h1>
            <div className="gameplay">
                <PlayerBoard gridArray={gridArray} />
                <div className="right-column mt-3">
                    <ComputerBoard gridArray={gridArray} />
                    <MessageBox />
                </div>
            </div>
            <GameBtns />
        </div>
    )
}

export default Main;