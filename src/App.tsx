import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './slice/todoSlice.ts'
import TodoDisplay from './components/TodoDisplay.tsx'

function App() {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState("")

  const handleAddTodo = () => {
    if (todo.length !== 0) {
      dispatch(addTodo(todo))
      setTodo("")
    }

  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }
  return (
    <>
      <div style={{
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)', color: '#fff', height: "100vh"
      }} className=' px-90 py-20 '>
        <h1 className=' font-extrabold text-4xl '>Todo App</h1>
        <div className='w-auto text-white  gap-12' >
          <input
            value={todo}
            onChange={handleInputChange}
            className='bg-white text-black border-b-black w-80'
            type="text"
            placeholder='Enter your task' />
          <button onClick={handleAddTodo}
            className='bg-blue-500 mx-10  text-white rounded-lg p-1'>Add Task</button>
        </div>
        <TodoDisplay />
      </div >
    </>


  )
}

export default App
