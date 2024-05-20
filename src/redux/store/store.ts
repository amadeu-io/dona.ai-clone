import { configureStore } from "@reduxjs/toolkit"
import todoListsReducer from "../slices/todoListsSlice"

const store = configureStore({
  reducer: {
    todoLists: todoListsReducer,
  },
})

export default store
