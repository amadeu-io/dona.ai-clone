import styles from "./TodoTitleItem.module.scss"
import type { TodoList } from "../../../types/todoTypes"
import { useTodoLists } from "../../../redux/hooks/useTodoLists"

interface TodoTitlesItemProps {
  todoList: TodoList
}

const TodoTitleItem: React.FC<TodoTitlesItemProps> = ({ todoList }) => {
  const { id, emoji, title, active } = todoList
  const { useSetActiveList } = useTodoLists()

  const handleTitleClick = () => {
    useSetActiveList(id)
  }

  return (
    <li
      className={`${styles.todoTitleItem} ${active ? styles.active : ""}`}
      onClick={handleTitleClick}
    >
      <div className={styles.left}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.title}>
          <h2>{title}</h2>
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.remove}>x</span>
      </div>
    </li>
  )
}

export default TodoTitleItem
