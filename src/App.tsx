import TodoList from "./components/Todos/Todos"
import TodoTitles from "./components/Lists/Lists"
import TodoForm from "./components/Todos/TodoForm/TodoForm"
import TodoTitleForm from "./components/Lists/ListForm/ListForm"
import Greeting from "./components/Greeting/Greeting"
import styles from "./App.module.scss"
import { useLists } from "./redux/hooks/useLists"

const App = () => {
  const { todoLists } = useLists()
  const activeTodoList = todoLists.find(todoList => todoList.active)

  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <TodoTitles lists={todoLists} />
        <TodoTitleForm />
      </div>

      <div className={styles.right}>
        <Greeting />
        <TodoForm />
        <TodoList activeList={activeTodoList} />
      </div>
    </div>
  )
}

export default App
