/**
 * This is a React component that renders a ship with a specified length and allows the user to modify
 * the ship length by clicking on it.
 * @param props - an object containing the properties passed down to the component from its parent
 * component. In this case, it likely contains a property called "shipLength".
 * @returns The `Ship` component is being returned. It renders a `div` with class name "ship" and an
 * `onClick` event listener that dispatches the `modifyShipLength` action with the `props.shipLength`
 * value. Inside the `div`, it maps over an array of length `props.shipLength` and renders a `div` with
 * class name "boat-square" for each element
 */
import React from "react";
import { useDispatch } from "react-redux";

import { modifyShipLength } from "../../actions/gameStartActions";
import "./GridSquare.css";

const Ship = (props) => {
  let shipArray = new Array(props.shipLength).fill(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modifyShipLength(props.shipLength));
  };

  return (
    <div className="ship" onClick={handleClick}>
      {shipArray.map((ele, index) => (
        <div key={index} className="boat-square"></div>
      ))}
    </div>
  );
};

export default Ship;
