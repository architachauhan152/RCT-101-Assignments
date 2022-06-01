import { TodoInput } from "./TodoInput";
import { nanoid } from "nanoid";
import {  useState } from "react";
import { TodoItem } from "./TodoItem";
export const Todo = () => {

    const [ todosList, setTodosList ] = useState([]);
    const [tastinput, setTaskInput]=useState([])



    const getData = (text) => {
        const payload = {
            title: text,
            status: false,
            id: nanoid(2)
        };
        setTodosList([ ...todosList, payload ]);
    };


    // markComplete method
    const taskDone = (index) => {
        const list = [ ...toDoList ];
        list[ index ].isComplete = !list[ index ].isComplete;
        setTaskInput();

    };
    // deleting method
    const deleteTask = (index) => {
        let splice = todosList.filter((item, i) => i !== index);
        setTodosList(splice);
    }
    return (
        <div>
            <h1>todos</h1>
            <TodoInput getData={ getData } />
            <ul>

            { todosList.map((item, index) => (
                <li className="todos">
                    <TodoItem { ...item } 
                        key={ item.id } taskDone={ taskDone }
                        index={ index }
                        deleteTask={ deleteTask }
                        />
                </li>
            )) }
            </ul>
            <small>Left click to toggle completed. Right click to delete todo</small>
        </div>
    );

};
