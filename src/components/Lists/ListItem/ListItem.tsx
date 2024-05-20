import type { List } from "../../../types/types"
import styles from "./ListItem.module.scss"
import { useLists } from "../../../redux/hooks/useLists"

interface ListItemProps {
  list: List
}

const ListItem: React.FC<ListItemProps> = ({ list }) => {
  const { id, emoji, listTitle, active } = list
  const { useSetActiveList } = useLists()

  const handleListClick = () => {
    useSetActiveList(id)
  }

  return (
    <li
      className={`${styles.listItem} ${active ? styles.active : ""}`}
      onClick={handleListClick}
    >
      <div className={styles.left}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.title}>
          <h2>{listTitle}</h2>
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.remove}>x</span>
      </div>
    </li>
  )
}

export default ListItem
