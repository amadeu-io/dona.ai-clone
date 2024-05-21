import { useState } from "react"
import { useLists } from "../../../redux/hooks/useLists"
import styles from "./TodoItem.module.scss"
import type { Todo } from "../../../types/types"
import CheckIcon from "../../../icons/CheckIcon"
import getTextWidth from "../../../utils/getTextWidth"

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { id, todoTitle, completed } = todo
  const { useRemoveTodo, useToggleTodoCompleted, useChangeTodoTitle } =
    useLists()
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

  const handleRemoveClick = () => {
    useRemoveTodo(id)
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
          value={todoTitle}
          style={{ width: `${getTextWidth(todoTitle, 400)}px` }} // tightly fit text
          onClick={handleTitleClick}
          onChange={handleTitleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className={styles.right}>
        <span className={styles.remove} onClick={handleRemoveClick}>
          x
        </span>
      </div>
    </li>
  )
}

export default TodoItem
