import React, { useState } from 'react'
import "./TodoItem.css"

const TodoItem = () => {
  const [color,setColor]=useState(false);
  return (
    <button onClick={()=>{
      setColor(true);
    }} className={color ? "colorgreen" :"colorpurple"}>o</button>
  )
}

export  {TodoItem}
