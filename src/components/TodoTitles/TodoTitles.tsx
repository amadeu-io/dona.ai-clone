import styles from "./TodoTitles.module.scss"
import type { TodoLists } from "../../types/todoTypes"
import TodoTitleItem from "./TodoTitleItem/TodoTitleItem"
import TodoTitleForm from "./TodoTitleForm/TodoTitleForm"

interface TodoTitlesProps {
  todoLists: TodoLists
}

const TodoTitles: React.FC<TodoTitlesProps> = ({ todoLists }) => {
  return (
    <ul className={styles.todoTitles}>
      {todoLists.map(todoList => (
        <TodoTitleItem key={todoList.id} todoList={todoList} />
      ))}
    </ul>
  )
}

export default TodoTitles
