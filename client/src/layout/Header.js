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
