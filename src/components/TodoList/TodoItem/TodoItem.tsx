import styles from "./TodoItem.module.scss"
import type { Todo } from "../../../types/todoTypes"

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { title, completed } = todo

  return (
    <li className={styles.todoItem}>
      <div className={styles.left}>
        <input type="checkbox" checked={completed} />
        <h3 className={`${styles.title} ${completed ? styles.completed : ""}`}>
          {title}
        </h3>
      </div>
      <div className={styles.right}>
        <span className={styles.remove}>x</span>
      </div>
    </li>
  )
}

export default TodoItem
