import { useEffect, useState } from "react"
import Square from "./Square"
import {v4 as uuid} from "uuid"
const Board = () => {
  let initialState=["","","","","","","","",""]
  const [square,setSquare]=useState(initialState)
  const [turn,setTurn]=useState("x")

  const handleClick=(index)=>{
    if(square[index]==="" && turn==="x"){
     let string=[...square]
     string[index]=turn
     setSquare(string)
    setTurn("o")
   }
   else if(square[index]===""){
    let string=[...square]
    string[index]=turn
    setSquare(string)
     setTurn("x")
   }

  }
  useEffect(()=>{
    const winner=calculateWinner()
    if(winner){
      setTimeout(() => {
        alert(`Hurray ${winner} has won this game`)
        setSquare(initialState)
        
      },200);
      
    }
  },[square])

  const calculateWinner=(squares) =>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  return (
    <>
    <div className="board">
      {square.map((t,index)=>
      <Square key={uuid()} turn={square[index]} onClick={()=>handleClick(index)}/>
      )}
    </div>
    <div className="btn-div">

    <button onClick={()=>setSquare(initialState)}>reset</button>
    </div>
      </>
  )
}

export default Board
