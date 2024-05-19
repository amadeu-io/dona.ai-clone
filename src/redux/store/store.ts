import { configureStore } from "@reduxjs/toolkit"
import todoListsReducer from "../slices/todoListsSlice"
import type { TodoLists } from "../../types/todoTypes"

const store = configureStore({
  reducer: {
    todoLists: todoListsReducer,
  },
})

export default store
