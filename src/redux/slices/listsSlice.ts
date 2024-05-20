import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { initLists } from "../../data/lists"
import { v4 as uuidv4 } from "uuid"
import getRandomEmoji from "../../utils/getRandomEmoji"

const listsSlice = createSlice({
  name: "lists",
  initialState: initLists,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      const listTitle = action.payload

      state.forEach(list => {
        list.active = false
      })

      const newList = {
        id: uuidv4(),
        listTitle,
        emoji: getRandomEmoji(),
        active: true,
        todos: [],
      }

      state.push(newList)
    },

    setActiveList: (state, action: PayloadAction<string>) => {
      state.forEach(list => {
        if (list.id === action.payload) {
          list.active = true
        } else {
          list.active = false
        }
      })
    },

    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: uuidv4(),
        todoTitle: action.payload,
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
      todo.todoTitle = action.payload.newTitle
    },
  },
})

// Export actions for use in components
export const {
  addList,
  setActiveList,
  addTodo,
  removeTodo,
  toggleTodoCompleted,
  changeTodoTitle,
} = listsSlice.actions

// Export the reducer to be included in the store
export default listsSlice.reducer
