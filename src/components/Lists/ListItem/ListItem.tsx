import { useState } from "react"
import EmojiPick from "./EmojiPick/EmojiPick"
import type { List } from "../../../types/types"
import styles from "./ListItem.module.scss"
import { useLists } from "../../../redux/hooks/useLists"
import getTextWidth from "../../../utils/getTextWidth"

interface ListItemProps {
  list: List
}

const ListItem: React.FC<ListItemProps> = ({ list }) => {
  const { id, emoji, listTitle, active } = list
  const { useSetActiveList, useChangeListTitle, useRemoveList } = useLists()
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [isEmojiPick, setIsEmojiPick] = useState(false)

  const handleEmojiClick = () => {
    setIsEmojiPick(prevIsEmo => !prevIsEmo)
  }

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
          <EmojiPick list={list} onClick={handleEmojiClick} />
        </>
      ) : (
        <div className={styles.listContent}>
          <div className={styles.left}>
            <span className={styles.emoji} onClick={handleEmojiClick}>
              {emoji}
            </span>

            <input
              readOnly={isReadOnly}
              className={styles.title}
              type="text"
              value={listTitle}
              style={{ width: `${getTextWidth(listTitle, 500)}px` }} // tightly fit text
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
        </div>
      )}
    </li>
  )
}

export default ListItem
