import { useSelector } from "react-redux"
import { RootState } from "./app/store"
import TodoList from "./components/TodoList/TodoList"
import TodoTitles from "./components/TodoTitles/TodoTitles"
import TodoForm from "./components/TodoList/TodoForm/TodoForm"
import TodoTitleForm from "./components/TodoTitles/TodoTitleForm/TodoTitleForm"
import Greeting from "./components/Greeting/Greeting"
import styles from "./App.module.scss"

const App = () => {
  const todoLists = useSelector((state: RootState) => state.todoLists)
  const activeTodoList = todoLists.find(todoList => todoList.active)

  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <TodoTitles todoLists={todoLists} />
        <TodoTitleForm />
      </div>

      <div className={styles.right}>
        <Greeting />
        <TodoForm />
        <TodoList todoList={activeTodoList} />
      </div>
    </div>
  )
}

export default App
