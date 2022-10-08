import React, { useState, useEffect, useRef } from 'react'

function TodoForm({ onSubmit }) {

  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })
  const handleSubmit = e => {

    e.preventDefault()

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  return (
    <div className='p-6 mt-8'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col mb-2'>
          <div className='relative'>
            <input className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' type="text" placeholder='Add a todo' value={input} name="text" onChange={handleChange} ref={inputRef} />
          </div>
        </div>
        <div className='flex w-full my-4'>
          <button className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>Add todo</button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm