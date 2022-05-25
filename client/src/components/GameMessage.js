import React from "react";
import { useSelector } from "react-redux";

import capitalizeName from "../utils/capitalizeName";

const GameMessage = () => {

    const { userMessage, computerMessage } = useSelector(state=>state.gamePlay) 
    const { name } = useSelector(state=>state.user) 

    return (
        <>
            <p className="mb-0">
                {capitalizeName(name)}: {userMessage}
            </p>
            <p className="mb-0">
                Computer: {computerMessage}
            </p>
        </>
          
    )
}

export default GameMessage