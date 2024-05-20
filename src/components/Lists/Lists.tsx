import styles from "./Lists.module.scss"
import type { Lists as ListsType } from "../../types/types"
import ListItem from "./ListItem/ListItem"

interface ListsProps {
  lists: ListsType
}

const Lists: React.FC<ListsProps> = ({ lists }) => {
  return (
    <ul className={styles.lists}>
      {lists.map(list => (
        <ListItem key={list.id} list={list} />
      ))}
    </ul>
  )
}

export default Lists
