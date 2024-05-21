import type { List } from "../../../../types/types"
import styles from "./EmojiPick.module.scss"
import { emojis } from "../../../../data/emojis"
import { useLists } from "../../../../redux/hooks/useLists"

interface EmojiPickProps {
  list: List
  onClick: () => void
}

const EmojiPick: React.FC<EmojiPickProps> = ({ list, onClick }) => {
  const { id } = list
  const { useChangeListEmoji } = useLists()

  const handleEmojiClick = (emoji: string) => {
    useChangeListEmoji(id, emoji)
  }

  return (
    <ul className={styles.emojiPick} onClick={onClick}>
      {emojis.map((emoji, index) => (
        <li
          key={index}
          className={styles.emoji}
          onClick={() => handleEmojiClick(emoji)}
        >
          {emoji}
        </li>
      ))}
    </ul>
  )
}

export default EmojiPick
