import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TodoLists } from "../../types/todoTypes"
import {
  addList,
  setActiveList,
  addTodo,
  removeTodo,
  toggleTodoCompleted,
  changeTodoTitle,
} from "../slices/todoListsSlice"

export interface RootState {
  todoLists: TodoLists
}

export const useTodoLists = () => {
  const todoLists = useSelector((state: RootState) => state.todoLists)
  const dispatch = useDispatch()

  const useAddList = useCallback(
    (listData: string) => dispatch(addList(listData)),
    [dispatch],
  )

  const useSetActiveList = useCallback(
    (listId: string) => dispatch(setActiveList(listId)),
    [dispatch],
  )

  const useAddTodo = useCallback(
    (title: string) => dispatch(addTodo(title)),
    [dispatch],
  )

  const useRemoveTodo = useCallback(
    (todoId: string) => dispatch(removeTodo(todoId)),
    [dispatch],
  )

  const useToggleTodoCompleted = useCallback(
    (todoId: string) => dispatch(toggleTodoCompleted(todoId)),
    [dispatch],
  )

  const useChangeTodoTitle = useCallback(
    (todoId: string, newTitle: string) =>
      dispatch(changeTodoTitle({ todoId, newTitle })),
    [dispatch],
  )

  return {
    todoLists,
    useAddList,
    useSetActiveList,
    useAddTodo,
    useRemoveTodo,
    useToggleTodoCompleted,
    useChangeTodoTitle,
  }
}
