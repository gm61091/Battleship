import React, { useState, useEffect } from "react";
import "./GridSquare.css";
import { useSelector, useDispatch } from "react-redux";
import modifySelectedSquares from "../actions/modifySelectedSquares";
import updateLastActiveSquare from "../actions/updateLastActiveSquare";

const GridSquare = ({ id, row, col }) => {

    const dispatch = useDispatch();
    const shipLength = useSelector(state => state.gameStart.shipLength);
    const selectedSquares = useSelector(state => state.gameStart.selectedSquares);
    const shipOrientation = useSelector(state => state.gameStart.shipOrientation);
    const shipLocations = useSelector(state => state.gameStart.shipLocations);
    const lastActiveSquare = useSelector(state => state.gameStart.lastActiveSquare);
    const [css, setCss] = useState("");

    const handleHover = () => {
        dispatch(updateLastActiveSquare(id))
        if (shipOrientation === "horizontal" && (col + shipLength - 1) <= 9) {
            let [anotherShip, squareList] = [false, []];
            for (let count = 0; count < shipLength; count++) {
                if (`${row}${col + count}` in shipLocations) {
                    anotherShip = true;
                    break;
                }
                squareList.push(`${row}${col + count}`)
            }
            if (!anotherShip) dispatch(modifySelectedSquares(squareList))
        } else if (shipOrientation === "vertical" && (row + shipLength - 1) <= 9) {
            let [anotherShip, squareList] = [false, []];
            for (let count = 0; count < shipLength; count++) {
                if (`${row + count}${col}` in shipLocations) {
                    anotherShip = true;
                    break;
                }
                squareList.push(`${row + count}${col}`)
            }
            if (!anotherShip) dispatch(modifySelectedSquares(squareList))
        } else {
            dispatch(modifySelectedSquares([""]));
        }
    }

    useEffect(() => {
        for (const squareId of selectedSquares) {
            let squareHighlighted;
            if (squareId === id) {
                setCss(" highlighted");
                squareHighlighted = true;
                break;
            }
            if (!squareHighlighted) setCss("");
        }
    }, [selectedSquares])

    useEffect(() => {
        if (id === lastActiveSquare) handleHover();
    }, [shipOrientation])

    return (
        <div className={`grid-square${css}`} onMouseEnter={handleHover}></div>
    )
}

export default GridSquare;