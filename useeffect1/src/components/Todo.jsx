import React, { useEffect, useState } from 'react'

export const Todo = () => {
    
    const [todo,setTodo]=useState([])

    const [newtodo,setNewTodo]=useState("")

    const [loading,setLoading]=useState(false)

    const [isError,setError]=useState(false)

    const [del,setDel]=useState()

    const [update,setUpdate]=useState(0)

    const [page,setPage]=useState(1)

    useEffect(()=>{
        setLoading(true)
       //not calling again & again   //?_page=1&_limit=3
        fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
        .then((r)=>r.json())
        .then((d)=>{setTodo(d)})
        .catch((err)=>{setError(true)})
        .finally(()=>{setLoading(false)})
       
    },[page])
    // console.log(todo)


    const saveInfo=()=>{
        //calll api to save info in backend
      //post api call
     
      fetch(`http://localhost:8080/todos`,{
          method:"Post",
          headers:{'content-type':'application/json'},
          body:JSON.stringify({
              value:newtodo,
              iscompleted:false,
          })
      }).then((r)=>r.json())
      .then((d)=>{setTodo([...todo,d])
    
      setNewTodo("")  
    })
      
      
        setNewTodo();
    }

const handeldelete=(id)=>{
    
   let update= todo.filter((e)=>e.id !==id)
    setTodo(update)
}




const handelUpdate=(id)=>{
    setUpdate(id)
}

  return loading? <div>.....Loading</div> : isError? <div> Something went wrong Please check..... </div> : (
    <div>
    
    <h2><u>Todo App</u></h2>
    
    <div>
        <input  value={newtodo} onChange={({target})=>setNewTodo(target.value)}/>
    <button disabled={!newtodo} onClick={saveInfo}>+</button>
    </div>
     {todo.map((e)=>(
         <div key={e.id}>{`${e.id}-${e.value}-${e.iscompleted}`}
         <button onClick={()=>handeldelete(e.id)}>Delete</button>
         <button onClick={()=>handelUpdate(e.id)}>Update</button>
         </div>
     ))}
    <h3>{page}</h3>
    <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
    <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}
