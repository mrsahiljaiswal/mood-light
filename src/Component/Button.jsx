import React from 'react'
import "./button.css"
const Button = ({name , setColor}) => {

    function handleClick(){
       setColor(name)
    }

  return (
    <div>
      <button style={
        {   
            color : (name === "black") ? "white" : "black",
            backgroundColor:name,
        }
        } 
        onClick={handleClick}>{name}</button>
    </div>
  )
}

export default Button
