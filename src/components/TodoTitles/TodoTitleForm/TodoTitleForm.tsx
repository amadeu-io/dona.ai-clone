import styles from "./TodoTitleForm.module.scss"

const TodoTitleForm = () => {
  return (
    <form className={styles.todoTitleForm}>
      <input
        className={styles.input}
        type="text"
        placeholder="+     Create new list"
      />
    </form>
  )
}

export default TodoTitleForm
