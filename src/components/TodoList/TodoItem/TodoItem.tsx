import { useState } from "react"
import { useTodoLists } from "../../../redux/hooks/useTodoLists"
import styles from "./TodoItem.module.scss"
import type { Todo } from "../../../types/todoTypes"
import CheckIcon from "../../../icons/CheckIcon"

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { id, title, completed } = todo
  const { useToggleTodoCompleted, useChangeTodoTitle } = useTodoLists()
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleCheckboxClick = () => {
    useToggleTodoCompleted(id)
  }

  const handleTitleClick = () => {
    setIsReadOnly(false)
  }

  const handleTitleChange = e => {
    useChangeTodoTitle(id, e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setIsReadOnly(true)
    }
  }

  return (
    <li className={styles.todoItem}>
      <div className={styles.left}>
        <>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxClick}
          />
          <CheckIcon className={styles.checkIcon} />
        </>

        <input
          readOnly={isReadOnly}
          className={`${styles.title} ${completed ? styles.completed : ""}`}
          type="text"
          value={title}
          onClick={handleTitleClick}
          onChange={handleTitleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className={styles.right}>
        <span className={styles.remove}>x</span>
      </div>
    </li>
  )
}

export default TodoItem
