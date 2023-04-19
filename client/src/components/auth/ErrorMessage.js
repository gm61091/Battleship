/**
 * This is a React component that renders an error message with a red text color.
 * @returns A React component that renders a span element with a class name of "message-span
 * text-danger" and displays the error message passed as a prop.
 */
import React from "react";

const ErrorMessage = ({ message }) => {
  return <span className="message-span text-danger">{message}</span>;
};

export default ErrorMessage;
