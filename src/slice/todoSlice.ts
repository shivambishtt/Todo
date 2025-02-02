import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number,
    todoTitle: string,
    isCompleted: boolean
}

// structure of state
export interface TodoArray {
    todos: Todo[]
}

// Initial state with empty array of todos
const initialState: TodoArray = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: state.todos.length + 1,
                todoTitle: action.payload,
                isCompleted: false,
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        editTodo: (state, action: PayloadAction<{ id: number, todoTitle: string }>) => {
            const { id, todoTitle } = action.payload
            const editTodo = state.todos.find((todo) => {
                return todo.id === id
            })
            if (editTodo) {
                editTodo.todoTitle = todoTitle
            }
        }


    },
})
export default todoSlice.reducer
export const { addTodo, removeTodo } = todoSlice.actions
// reducers
