import { configureStore } from "@reduxjs/toolkit"
import todoListsReducer from "../features/counter/todoListsSlice"
import type { TodoLists } from "../types/todoTypes"

export interface RootState {
  todoLists: TodoLists
}

const store = configureStore({
  reducer: {
    todoLists: todoListsReducer,
  },
})

export default store
