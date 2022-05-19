import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GridSquare.css"

const CompGridSquare = ({ id }) => {

    const [status, setStatus] = useState("")
    const computerShipCoordinates = useSelector(state => state.gamePlay.computerShipCoordinates)
    const computerShipLocations = useSelector(state => state.gamePlay.computerShipLocations)


    const handleClick = () => {
        if(id in computerShipLocations) {
            setStatus("HIT")
        }
        else{  
            setStatus("MISS")
        }
    }

    return (
        <div className={`comp-square`} onClick={handleClick}>

            { status ? (status === "HIT" ? "💥" : "●") : "" }

        </div>
    )
}

export default CompGridSquare;