import React from "react";

const ErrorMessage = ({ message }) => {
  return <span className="message-span text-danger">{message}</span>;
};

export default ErrorMessage;
