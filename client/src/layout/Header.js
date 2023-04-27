/**
 * This is a React component for rendering a header with the text "Battleship".
 * @returns The `Header` component is being returned, which contains a `h1` element with the text
 * "Battleship" and a style prop passed down from its parent component.
 */
import React from "react";
import "./Header.css";

const Header = ({ style }) => {
  return (
    <>
      <h1 id="header-txt" style={style}>
        Battleship
      </h1>
    </>
  );
};

export default Header;
