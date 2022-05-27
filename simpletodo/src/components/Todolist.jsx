import React from 'react';
import {TodoItem} from "./TodoItem"
import "./Todolist.css"

const Todolist = ({todos}) => {
  
  return (
    <div className='overflow'>
        {todos.map((todo)=>{
           return <div className="result">
             <div className='value'>{todo.value}</div>
             <div ><TodoItem key={todo.id} /></div>
             
             
             </div>
        })}
    </div>
  )
}

export {Todolist}
