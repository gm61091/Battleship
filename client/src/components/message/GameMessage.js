/**
 * The GameMessage component displays messages from the user and computer during gameplay, with some
 * conditional rendering for formatting.
 * @returns The `GameMessage` component is returning two paragraphs of text, one for the user's message
 * and one for the computer's message. The text is formatted based on the content of the messages and
 * includes a `number-span` class for any numbers in the message. The `capitalizeName` function is used
 * to capitalize the user's name. The component is using the `useSelector` hook from `
 */
import React from "react";
import { useSelector } from "react-redux";

import capitalizeName from "../../utils/capitalizeName";

const GameMessage = () => {
  const { userMessage, computerMessage } = useSelector(
    (state) => state.gamePlay
  );
  const { name } = useSelector((state) => state.user);

  return (
    <>
      <p className="mb-0">
        {capitalizeName(name)}:{" "}
        {userMessage[1] === "l" ? (
          userMessage
        ) : userMessage[2] === "0" ? (
          <>
            <span className="number-span">{userMessage.slice(0, 3)}</span>
            {userMessage.slice(3)}
          </>
        ) : (
          <>
            <span className="number-span">{userMessage.slice(0, 2)}</span>
            {userMessage.slice(2)}
          </>
        )}
      </p>
      <p className="mb-0">
        Computer:{" "}
        {computerMessage[1] === "o" || computerMessage === "" ? (
          computerMessage
        ) : computerMessage[2] === "0" ? (
          <>
            <span className="number-span">{computerMessage.slice(0, 3)}</span>
            {computerMessage.slice(3)}
          </>
        ) : (
          <>
            <span className="number-span">{computerMessage.slice(0, 2)}</span>
            {computerMessage.slice(2)}
          </>
        )}
      </p>
    </>
  );
};

export default GameMessage;
