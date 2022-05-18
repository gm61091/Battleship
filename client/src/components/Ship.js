import React from "react";
import "./GridSquare.css";


const Ship = (props)=>{


    let shipArray =new Array(props.shipLength).fill(0)

    return(
     <div className="ship">

       {  shipArray.map(()=>{

           return(

            <div className="boat-square"> 
                
            </div>
           )
         })}

    </div>
    )

    
}



export default Ship;