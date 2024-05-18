import TodoItem from "./TodoItem/TodoItem"
import styles from "./TodoList.module.scss"
import type { TodoList as TodoListType } from "../../types/todoTypes"

interface TodoListProps {
  todoList: TodoListType
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  const { todos } = todoList

  return (
    <ul className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
