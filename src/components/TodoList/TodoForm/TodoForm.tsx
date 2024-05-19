import { useForm } from "react-hook-form"
import { useTodoLists } from "../../../redux/hooks/useTodoLists"
import styles from "./TodoForm.module.scss"

interface FormData {
  todoTitle: string
}

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const { useAddTodo } = useTodoLists()

  const onSubmit = (data: FormData) => {
    console.log(data)

    const cleanTodoTitle = data.todoTitle.trim()
    if (cleanTodoTitle) {
      useAddTodo(cleanTodoTitle)
      reset()
    }
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.todoInput}
        type="text"
        placeholder="Write a new todo"
        {...register("todoTitle")}
      />
    </form>
  )
}

export default TodoForm
