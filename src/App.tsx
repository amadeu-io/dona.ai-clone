import styles from "./App.module.scss"
import TodoList from "./components/TodoList/TodoList"
import { initTodoLists } from "./data/todoLists"
import TodoTitles from "./components/TodoTitles/TodoTitles"

const App = () => {
  const todoLists = initTodoLists
  const activeTodoList = initTodoLists.find(todoList => todoList.active)

  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <TodoTitles todoLists={todoLists} />
      </div>

      <div className={styles.right}>
        <div className="header-section">
          <h1 className="greeting-text">Good Morning, User</h1>
          <h4 className="date-text">It's Saturday, May 18 </h4>
        </div>

        <form className={styles.todoForm}>
          <input
            className={styles.todoInput}
            type="text"
            placeholder="Write a new todo"
          />
        </form>

        <TodoList todoList={activeTodoList} />
      </div>
    </div>
  )
}

export default App
