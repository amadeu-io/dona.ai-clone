import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Lists } from "../../types/types"
import {
  addList,
  setActiveList,
  changeListTitle,
  changeListEmoji,
  removeList,
  addTodo,
  toggleTodoCompleted,
  changeTodoTitle,
  removeTodo,
} from "../slices/listsSlice"

export interface RootState {
  lists: Lists
}

export const useLists = () => {
  const lists = useSelector((state: RootState) => state.lists)
  const dispatch = useDispatch()

  const useAddList = useCallback(
    (listData: string) => dispatch(addList(listData)),
    [dispatch],
  )

  const useSetActiveList = useCallback(
    (listId: string) => dispatch(setActiveList(listId)),
    [dispatch],
  )

  const useChangeListTitle = useCallback(
    (listId: string, newTitle: string) =>
      dispatch(changeListTitle({ listId, newTitle })),
    [dispatch],
  )

  const useChangeListEmoji = useCallback(
    (listId: string, newEmoji: string) =>
      dispatch(changeListEmoji({ listId, newEmoji })),
    [dispatch],
  )

  const useRemoveList = useCallback(
    (listId: string) => dispatch(removeList(listId)),
    [dispatch],
  )

  const useAddTodo = useCallback(
    (title: string) => dispatch(addTodo(title)),
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

  const useRemoveTodo = useCallback(
    (todoId: string) => dispatch(removeTodo(todoId)),
    [dispatch],
  )

  return {
    lists,
    useAddList,
    useSetActiveList,
    useChangeListTitle,
    useChangeListEmoji,
    useRemoveList,
    useAddTodo,
    useToggleTodoCompleted,
    useChangeTodoTitle,
    useRemoveTodo,
  }
}
