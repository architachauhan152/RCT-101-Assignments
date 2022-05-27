import React, { useState } from 'react'
import {Todolist} from './Todolist';
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"


const Todo = () => {
const [value,setValue]=useState("");

const [todos,setTodos]=useState([]);
const addtodo=(newtodo)=>{
setTodos([...todos,{
    id:uuidv4(),
    value:newtodo,
}])
}

  return (
    <div className="output-div">
      <div className="input-button">
    
      
        <input  value={value} type="text"  placeholder="Write Something" onChange={(e)=>{
            setValue(e.target.value);
        }}/>
        <button onClick={()=>{
          if(value.length!==0){
            addtodo(value);
            setValue("");
            console.log(value);
            console.log(todos);
          }
           
        }

        } className="btn">+</button>
      </div>
      <Todolist todos={todos}/>
       
    </div>
  )
}

export default Todo
