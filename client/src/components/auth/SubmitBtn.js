import React from "react"
import Button from "react-bootstrap/Button"

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
    )
}

export default SubmitBtn