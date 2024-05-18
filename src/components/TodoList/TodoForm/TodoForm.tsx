import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addTodo } from "../../../features/counter/todoListsSlice"
import styles from "./TodoForm.module.scss"

interface FormData {
  todoText: string
}

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()
  const useAddTodo = text => {
    dispatch(addTodo(text))
  }

  const onSubmit = (data: FormData) => {
    const cleanTodoText = data.todoText.trim()
    if (cleanTodoText) {
      useAddTodo(cleanTodoText)
      reset()
    }
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.todoInput}
        type="text"
        placeholder="Write a new todo"
        {...register("todoText")}
      />
    </form>
  )
}

export default TodoForm
