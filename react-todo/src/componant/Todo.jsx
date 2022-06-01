import { useState } from "react"
import { TodoInput } from "./Todoinput"
import { Todoitem } from "./todoitem"
import {nanoid} from "nanoid"


function Todo(){
    const [todolist,settodoList]=useState([])
    const getdata=(todo)=>{
        const payload={
            title:todo,
            status:false,
            id:nanoid(5)
        }
        settodoList([...todolist, payload])
    }
    const handelstatus=(id)=>{
        const newarr= todolist.map((e)=>{
            if(e.id===id){
                return {
                    ...e,status:!e.status
                }
            }
            return e;
        })
        settodoList(newarr)

    }
    return <div>
        <TodoInput getdata={getdata}/>
        {todolist.map((e)=>(
            <Todoitem handelstatus={handelstatus} todo={e}></Todoitem>
           
        ))}
    </div>
}

export {Todo}
