import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { initLists } from "../../data/lists"
import createNewList from "../../utils/createNewList"
import createNewTodo from "../../utils/createNewTodo"

const listsSlice = createSlice({
  name: "lists",
  initialState: initLists,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.forEach(list => {
        list.active = false
      })

      const listTitle = action.payload
      const newList = createNewList(listTitle)
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

    changeListTitle: (
      state,
      action: PayloadAction<{ listId: string; newTitle: string }>,
    ) => {
      const { listId, newTitle } = action.payload
      const listToUpdate = state.find(list => list.id === listId)
      listToUpdate.listTitle = newTitle
    },

    changeListEmoji: (
      state,
      action: PayloadAction<{ listId: string; newEmoji: string }>,
    ) => {
      const { listId, newEmoji } = action.payload
      const listToUpdate = state.find(list => list.id === listId)
      listToUpdate.emoji = newEmoji
    },

    removeList: (state, action: PayloadAction<string>) => {
      const listIdToRemove = action.payload
      const indexToRemove = state.findIndex(list => list.id === listIdToRemove)

      const isActive = state[indexToRemove].active
      state.splice(indexToRemove, 1)

      if (isActive && state.length > 0) {
        const nextActiveIndex =
          indexToRemove < state.length ? indexToRemove : indexToRemove - 1
        state[nextActiveIndex].active = true
      }
    },

    addTodo: (state, action: PayloadAction<string>) => {
      const todoTitle = action.payload
      const newTodo = createNewTodo(todoTitle)

      if (state.length) {
        const activeList = state.find(list => list.active)
        activeList.todos.push(newTodo)
      } else {
        // Edge Case: Todo is added without any lists
        const newList = createNewList()
        newList.todos.push(newTodo)
        state.push(newList)
      }
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

    removeTodo: (state, action: PayloadAction<string>) => {
      const activeList = state.find(list => list.active)
      activeList.todos = activeList.todos.filter(
        todo => todo.id !== action.payload,
      )
    },
  },
})

export const {
  addList,
  setActiveList,
  changeListTitle,
  changeListEmoji,
  removeList,
  addTodo,
  toggleTodoCompleted,
  changeTodoTitle,
  removeTodo,
} = listsSlice.actions

// Export the reducer to be included in the store
export default listsSlice.reducer
