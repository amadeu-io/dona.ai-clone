import { useState } from "react"
import type { List } from "../../../../types/types"
import styles from "./ListItem.module.scss"
import { useLists } from "../../../../redux/hooks/useLists"
import { emojis } from "../../../../data/emojis"

interface ListItemProps {
  list: List
}

const EmojiPick = ({ list }) => {
  const { id, emoji } = list

  const handleEmojiClick = e => {
    e.stopPropagation()
  }

  return (
    <ul className={styles.emojiPick} onClick={handleEmojiClick}>
      {emojis.map((emoji, index) => (
        <li key={index}>{emoji}</li>
      ))}
    </ul>
  )
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
  const [isEmojiPick, setIsEmojiPick] = useState(true)

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
      {isEmojiPick ? (
        <>
          <EmojiPick list={list} />
        </>
      ) : (
        <>
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
        </>
      )}
    </li>
  )
}

export default ListItem
