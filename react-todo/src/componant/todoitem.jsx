export const Todoitem = ({ todo ,handelstatus}) => {
  return (
    <div>
        <div>id:{todo.id}</div>
      {todo.title}-{todo.status ?"done":"Not done"}
      <button onClick={()=>handelstatus(todo.id)}>Toggel</button>
    </div>
  );
};
