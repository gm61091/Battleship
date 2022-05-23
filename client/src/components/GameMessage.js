import React from "react";
import { useSelector } from "react-redux";

const GameMessage = () => {

    const {userMessage, computerMessage} = useSelector(state=>state.gamePlay) 

    return (
            <>
            <p>
                User: {userMessage}
            </p>

            <p>
                Computer: {computerMessage}
            </p>
            </>
          
    )
}

export default GameMessage