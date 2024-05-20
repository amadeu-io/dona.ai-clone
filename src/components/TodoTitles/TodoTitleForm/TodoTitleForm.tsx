import { useForm } from "react-hook-form"
import { useTodoLists } from "../../../redux/hooks/useTodoLists"
import getRandomEmoji from "../../../utils/getRandomEmoji"
import styles from "./TodoTitleForm.module.scss"

interface FormData {
  todoList: string
}

const TodoTitleForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const { useAddList } = useTodoLists()

  const onSubmit = (data: FormData) => {
    const cleanTodoList = data.todoList.trim()

    if (cleanTodoList) {
      useAddList(cleanTodoList)
      reset()
    }
  }

  return (
    <form className={styles.todoTitleForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        placeholder="+     Create new list"
        {...register("todoList")}
      />
    </form>
  )
}

export default TodoTitleForm
