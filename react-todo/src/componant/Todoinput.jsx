import { useState } from "react"

export const TodoInput =({getdata})=>{
    const [text, setText]=useState("")
  return (
    <div>
    <input type="text" placeholder="Enter Todo" onChange={(e)=>{
        setText(e.target.value)
    }}></input>
   <button onClick={()=>{
       getdata(text)
   }}>Add Todo</button>
 
</div>
  )
}
  
