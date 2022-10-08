import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {

    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  }

  const updateTodo = (todoId, newValue) => {

    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
  }

  const completeTodo = id => {

    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })

    setTodos(updatedTodos);
  }

  return (
    <div className='flex  flex-col w-2/6 px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
      <div className='self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white'>What's the Plan for Today?</div>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList