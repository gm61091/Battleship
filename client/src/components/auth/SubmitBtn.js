/**
 * The function exports a React component for a submit button with customizable text, message, and
 * click handler.
 * @returns A React functional component that renders a Bootstrap Button with props for text, message,
 * and handleClick.
 */
import React from "react";
import Button from "react-bootstrap/Button";

const SubmitBtn = ({ text, message, handleClick }) => {
  return (
    <Button
      className={message ? "my-3" : "mb-3"}
      variant="success"
      onClick={handleClick}
      style={{ display: "block" }}
    >
      {text}
    </Button>
  );
};

export default SubmitBtn;
