import React, { useState } from 'react';

export const TodoInput = ({getData}) => {
    const [ todo, setTodo ] = useState("");

    console.log("todo", todo);
    return (
        <div className='inputForm'>
            <input type="text" className='input' placeholder="Enter Task" onChange={ (e) => setTodo(e.target.value) } />
            <button onClick={ () => { getData(todo); } }>Add Task</button>
        </div>
    );
}
