import React from 'react';

export const TodoItem = ({ title, status, id, index }) => {
  return (
    <div>
      <span
        className={status ? "task-complete" : "" }
        onClick={ () =>taskDone(index) }
      >
        { status ? `✔️ ` : "" }&nbsp;
        
      </span>
      <div className='TodoItems'>
        { title }
        <button onClick={ () => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
};
