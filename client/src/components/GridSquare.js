import React, { useState, useEffect } from "react";
import "./GridSquare.css";
import { useSelector, useDispatch } from "react-redux";
import modifySelectedSquares from "../actions/modifySelectedSquares";
import updateLastActiveSquare from "../actions/updateLastActiveSquare";
import updateShipLocations from "../actions/updateShipLocations";
import deleteShipLength from "../actions/deleteShipLength";

const GridSquare = ({ id, row, col }) => {

    const dispatch = useDispatch();
    const shipLength = useSelector(state => state.gameStart.shipLength);
    const selectedSquares = useSelector(state => state.gameStart.selectedSquares);
    const shipOrientation = useSelector(state => state.gameStart.shipOrientation);
    const shipLocations = useSelector(state => state.gameStart.shipLocations);
    const lastActiveSquare = useSelector(state => state.gameStart.lastActiveSquare);
    const [highlighted, setHighlighted] = useState("");
    const [selected, setSelected] = useState("");

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
            anotherShip ? dispatch(modifySelectedSquares([""])) : dispatch(modifySelectedSquares(squareList))
        } else if (shipOrientation === "vertical" && (row + shipLength - 1) <= 9) {
            let [anotherShip, squareList] = [false, []];
            for (let count = 0; count < shipLength; count++) {
                if (`${row + count}${col}` in shipLocations) {
                    anotherShip = true;
                    break;
                }
                squareList.push(`${row + count}${col}`)
            }
            anotherShip ? dispatch(modifySelectedSquares([""])) : dispatch(modifySelectedSquares(squareList))
        } else {
            dispatch(modifySelectedSquares([""]));
        }
    }

    const handleClick = () => {
        if (highlighted) {
            setHighlighted("");
            const newShipLocations = {};
            if (shipOrientation === "vertical") {
                for (let count = 0; count < shipLength; count++) {
                    newShipLocations[`${row + count}${col}`] = true
                }
            } else if (shipOrientation === "horizontal") {
                for (let count = 0; count < shipLength; count++) {
                    newShipLocations[`${row}${col + count}`] = true
                }
            }
            dispatch(updateShipLocations(newShipLocations));
            dispatch(deleteShipLength(shipLength));
        } 
    }

    useEffect(() => {
        for (const squareId of selectedSquares) {
            let squareHighlighted;
            if (squareId === id) {
                setHighlighted(" highlighted");
                squareHighlighted = true;
                break;
            }
            if (!squareHighlighted) setHighlighted("");
        }
    }, [selectedSquares])

    useEffect(() => {
        for (const squareId in shipLocations) {
            let squareSelected;
            if (squareId === id) {
                setSelected(" selected");
                squareSelected = true;
                break;
            }
            if (!squareSelected) setSelected("");
        }
    }, [shipLocations])

    useEffect(() => {
        if (id === lastActiveSquare) handleHover();
    }, [shipOrientation])

    return (
        <div className={`grid-square${highlighted}${selected}`} onMouseEnter={handleHover} onClick={handleClick}></div>
    )
}

export default GridSquare;