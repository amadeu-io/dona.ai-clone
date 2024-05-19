import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TodoLists } from "../../types/todoTypes"
import { addTodo } from "../slices/todoListsSlice"

export interface RootState {
  todoLists: TodoLists
}

export const useTodoLists = () => {
  const todoLists = useSelector((state: RootState) => state.todoLists)
  const dispatch = useDispatch()

  const useAddTodo = useCallback(
    (title: string) => dispatch(addTodo(title)),
    [dispatch],
  )

  return { todoLists, useAddTodo }
}
