import React from "react";
import "./GridSquare.css";
import modifyShipLength from "../actions/modifyShipLength"
import { useDispatch } from "react-redux";

const Ship = (props) => {

    let shipArray = new Array(props.shipLength).fill(0);
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(modifyShipLength(props.shipLength));
    }

    return (
      <div className="ship" onClick={handleClick}>
        {shipArray.map((ele, index) => <div key={index} className="boat-square"></div>)}
      </div>
    )  
}

export default Ship;