import { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

function TodoForm() {

  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addDoc(collection(db, "todos"), {
      title,
      completed: false,
    });

    setTitle('');
  }

  const handleChange = e => {
    setTitle(e.target.value);
  }

  return (
    <div className='p-6 mt-8'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col mb-2'>
          <div className='relative'>
            <input className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' type="text" placeholder='Add a todo' value={title} name="text" onChange={handleChange} ref={inputRef} />
          </div>
        </div>
        <div className='flex w-full my-4'>
          <button className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>Add todo</button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm;