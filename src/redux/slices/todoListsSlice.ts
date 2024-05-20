import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { initTodoLists } from "../../data/todoLists"
import { v4 as uuidv4 } from "uuid"

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState: initTodoLists,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      }
      const activeList = state.find(list => list.active)
      activeList.todos.push(newTodo)
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      const activeList = state.find(list => list.active)
      activeList.todos = activeList.todos.filter(
        todo => todo.id !== action.payload,
      )
    },

    toggleTodoCompleted: (state, action: PayloadAction<string>) => {
      const activeList = state.find(list => list.active)
      const todo = activeList.todos.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },

    changeTodoTitle: (
      state,
      action: PayloadAction<{ todoId: string; newTitle: string }>,
    ) => {
      const activeList = state.find(list => list.active)
      const todo = activeList.todos.find(
        todo => todo.id === action.payload.todoId,
      )
      todo.title = action.payload.newTitle
    },
  },
})

// Export actions for use in components
export const { addTodo, removeTodo, toggleTodoCompleted, changeTodoTitle } =
  todoListsSlice.actions

// Export the reducer to be included in the store
export default todoListsSlice.reducer
