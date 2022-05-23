import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromShipCoordinates, nextComputerMove, userMessage, setComputerTurn } from "../actions/gamePlayActions";
import "./GridSquare.css"
import convertSquareId from "../utils/convertSquareId"

const CompGridSquare = ({ id }) => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState("")
    const { computerShipLocations, gameOver, computerShipCoordinates, computerTurn } = useSelector(state => state.gamePlay)

    const handleClick = () => {
        if (!status && !gameOver && !computerTurn) {
            dispatch(setComputerTurn())
            if (id in computerShipLocations) {
                setStatus("hit")
                let shipSunk = false;
                for (const ship of computerShipCoordinates) {
                    if (ship.length === 1 && ship[0] === id) {
                        shipSunk = true;
                        dispatch(userMessage(`${convertSquareId(id)} - SHIP SUNK!`));
                    }
                }
                if (!shipSunk) dispatch(userMessage(`${convertSquareId(id)} - DIRECT HIT!`))
                dispatch(deleteFromShipCoordinates(id));
            } else {   
                setStatus("miss");
                dispatch(userMessage(`${convertSquareId(id)} - TORPEDO MISSED!`));
            }
            setTimeout(() => {
                dispatch(nextComputerMove());
            }, 1 * 1000)
        }
    }

    return (
        <div 
            className="comp-square" 
            onClick={handleClick}
            style={(status || computerTurn) ? {cursor: "default"} : {cursor: "pointer"}}
        >
            {status ? (status === "hit" ? "💥" : "●") : ""}
        </div>
    )
}

export default CompGridSquare;