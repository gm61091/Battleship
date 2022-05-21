import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromShipCoordinates, nextComputerMove, setMessage } from "../actions/gamePlayActions";
import "./GridSquare.css"

const CompGridSquare = ({ id }) => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState("")
    const { computerShipLocations, gameOver } = useSelector(state => state.gamePlay)

    const handleClick = () => {
        if (!status && !gameOver) {
            if (id in computerShipLocations) {
                setStatus("hit")
                dispatch(setMessage("Ship hit!"));
                dispatch(deleteFromShipCoordinates(id));
            } else {   
                setStatus("miss");
                dispatch(setMessage("Torpedo missed!"));
            }
            setTimeout(() => {
                dispatch(nextComputerMove());
            }, 0.5 * 1000)
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