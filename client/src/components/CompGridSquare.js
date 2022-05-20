import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteFromShipCoordinates from "../actions/deleteFromShipCoordinates";
import flipUserMiss from "../actions/flipUserMiss";
import "./GridSquare.css"

const CompGridSquare = ({ id }) => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState("")
    const computerShipLocations = useSelector(state => state.gamePlay.computerShipLocations)

    const handleClick = () => {
        if (!status) {
            if (id in computerShipLocations) {
                setStatus("hit")
                dispatch(flipUserMiss(false));
                dispatch(deleteFromShipCoordinates(id));
            } else {   
                setStatus("miss");
                dispatch(flipUserMiss(true));
            }
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