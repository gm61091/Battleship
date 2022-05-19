import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GridSquare.css"

const CompGridSquare = ({ id }) => {

    const [status, setStatus] = useState("")
    const computerShipCoordinates = useSelector(state => state.gamePlay.computerShipCoordinates)
    const computerShipLocations = useSelector(state => state.gamePlay.computerShipLocations)


    const handleClick = () => {
        if (id in computerShipLocations) {
            setStatus("hit")
        } else {   
            setStatus("miss")
        }
    }

    return (
        <div className={`comp-square`} onClick={handleClick}>
            {status ? (status === "hit" ? "💥" : "●") : ""}
        </div>
    )
}

export default CompGridSquare;