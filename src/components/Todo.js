import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)

    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? ' flex justify-center items-center py-4 px-1 bg-violet-100 shadow-lg rounded-lg my-5' : 'flex justify-between items-center py-4 px-1 bg-violet-100 shadow-lg rounded-lg my-2'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        <p className='m-2 text-white'>{todo.text}</p>
      </div>
      <div className='m-2'>
        <MdDeleteOutline className='m-2 fill-blue-500' onClick={() => removeTodo(todo.id)}/>
        <FaEdit className='m-2 fill-blue-500' onClick={() => setEdit({id: todo.id, value: todo.text})}/>
      </div>
    </div>
  ));
}

export default Todo