import React from "react";
import { useSelector } from "react-redux";

import capitalizeName from "../utils/capitalizeName";

const GameMessage = () => {

    const { userMessage, computerMessage } = useSelector(state=>state.gamePlay) 
    const { name } = useSelector(state=>state.user) 

    return (
        <>
            <p className="mb-0">{capitalizeName(name)}: {userMessage[1] === "l" ? 
                userMessage : 
                userMessage[2] === "0" ? 
                    <>
                        <span className="number-span">{userMessage.slice(0, 3)}</span>
                        {userMessage.slice(3)}
                    </>
                    :
                    <>
                        <span className="number-span">{userMessage.slice(0, 2)}</span>
                        {userMessage.slice(2)}
                    </>
                }
            </p>
            <p className="mb-0">Computer: {computerMessage[1] === "o" || computerMessage === "" ? 
                computerMessage : 
                computerMessage[2] === "0" ? 
                    <>
                        <span className="number-span">{computerMessage.slice(0, 3)}</span>
                        {computerMessage.slice(3)}
                    </>
                    :
                    <>
                        <span className="number-span">{computerMessage.slice(0, 2)}</span>
                        {computerMessage.slice(2)}
                    </>
                }
            </p>
        </>
          
    )
}

export default GameMessage