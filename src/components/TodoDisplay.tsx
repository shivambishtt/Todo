import React from 'react'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../slice/todoSlice.ts'

function TodoDisplay() {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todo.todos)

    const handleRemove = (id: number) => {
        dispatch(removeTodo(id))
    }


    return (
        < div className='bg-white h-50 w-2xl flex gap-8 text-black'>
            <div>
                <div >
                    {todos?.map((todo) => {
                        return <li
                            key={todo.id} >
                            <span>{todo.todoTitle}</span>
                            <button onClick={() => handleRemove(todo.id)} className=' bg-red-200'>❌</button>
                        </li>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoDisplay
