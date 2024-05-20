import { useForm } from "react-hook-form"
import { useLists } from "../../../redux/hooks/useLists"
import styles from "./TodoForm.module.scss"

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const { useAddTodo } = useLists()

  const onSubmit = (data: { todoTitle: string }) => {
    const cleanTodoTitle = data.todoTitle.trim()

    if (cleanTodoTitle) {
      useAddTodo(cleanTodoTitle)
      reset()
    }
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        placeholder="Write a new todo"
        {...register("todoTitle")}
      />
    </form>
  )
}

export default TodoForm
