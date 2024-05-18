import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { initTodoLists } from "../../data/todoLists"
import { v4 as uuidv4 } from "uuid"

const todoListsSlice = createSlice({
  name: "counter",
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
  },
})

// Export actions for use in components
export const { addTodo } = todoListsSlice.actions

// Export the reducer to be included in the store
export default todoListsSlice.reducer
