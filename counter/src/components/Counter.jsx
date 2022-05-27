import React, { useState } from 'react'
import "./counter.css"


export const Counter = ({prop}) => {
    const [count,setCount]=useState(prop)

    const handleinc=(value)=>{
        

        
            setCount(count+value);
        
         }
         const handledec=(value)=>{
        
     if(count<=1){
         return;
     }
        
            setCount(count+value);
        
         }

    const double=()=>{
   setCount(count*2)
    }
  return (
    <div>
       <h3 className={count%2===0 ? "even" : "odd"}> Counter:{count}</h3>
       <button onClick={()=>{
           handleinc(1)
       }}>Increment</button>
       <button onClick={()=>{
           handledec(-1)
       }}>Decrement</button>
       <button onClick={double}>Double</button>
        
     </div>
  )
}
