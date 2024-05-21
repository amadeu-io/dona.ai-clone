import { useState } from "react"
import type { List } from "../../../types/types"
import styles from "./ListItem.module.scss"
import { useLists } from "../../../redux/hooks/useLists"

interface ListItemProps {
  list: List
}

const ListItem: React.FC<ListItemProps> = ({ list }) => {
  const { id, emoji, listTitle, active } = list
  const {
    useSetActiveList,
    useChangeListTitle,
    useChangeListEmoji,
    useRemoveList,
  } = useLists()
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleListClick = () => {
    useSetActiveList(id)
  }

  const handleTitleClick = () => {
    setIsReadOnly(false)
  }

  const handleTitleChange = e => {
    useChangeListTitle(id, e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setIsReadOnly(true)
    }
  }

  const handleRemoveClick = e => {
    e.stopPropagation()

    useRemoveList(id)
  }

  return (
    <li
      className={`${styles.listItem} ${active ? styles.active : ""}`}
      onClick={handleListClick}
    >
      <div className={styles.left}>
        <span className={styles.emoji}>{emoji}</span>

        <input
          readOnly={isReadOnly}
          className={styles.title}
          type="text"
          value={listTitle}
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

const TodoItem = ({ todo }) => {
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
        </>

        <input
          readOnly={isReadOnly}
          className={`${styles.title} ${completed ? styles.completed : ""}`}
          type="text"
          value={todoTitle}
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

export default ListItem
