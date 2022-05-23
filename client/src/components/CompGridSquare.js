import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromShipCoordinates, nextComputerMove, userMessage } from "../actions/gamePlayActions";
import "./GridSquare.css"
import convertSquareId from "../utils/convertSquareId"

const CompGridSquare = ({ id }) => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState("")
    const { computerShipLocations, gameOver } = useSelector(state => state.gamePlay)

    const handleClick = () => {
        if (!status && !gameOver) {
            if (id in computerShipLocations) {
                setStatus("hit")
                dispatch(userMessage(`${convertSquareId(id)} - DIRECT HIT!`))
                dispatch(deleteFromShipCoordinates(id));
            } else {   
                setStatus("miss");
                dispatch(userMessage(`${convertSquareId(id)} - TORPEDO MISSED!`));
            }
            // setTimeout(() => {
            //     dispatch(nextComputerMove());
            // }, 0.25 * 1000)
            dispatch(nextComputerMove());
        }
    }

    return (
        <div 
            className="comp-square" 
            onClick={handleClick}
            style={status ? {cursor: "default"} : {cursor: "pointer"}}
        >
            {status ? (status === "hit" ? "💥" : "●") : ""}
        </div>
    )
}

export default CompGridSquare;