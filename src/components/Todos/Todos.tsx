import TodoItem from "./TodoItem/TodoItem"
import styles from "./Todos.module.scss"
import type { List } from "../../types/types"

interface TodosProps {
  activeList: List
}

const Todos: React.FC<TodosProps> = ({ activeList }) => {
  const { todos } = activeList

  return (
    <ul className={styles.todos}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default Todos
