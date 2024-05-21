import Todos from "./components/Todos/Todos"
import TodoTitles from "./components/Lists/Lists"
import TodoForm from "./components/Todos/TodoForm/TodoForm"
import TodoTitleForm from "./components/Lists/ListForm/ListForm"
import Greeting from "./components/Greeting/Greeting"
import styles from "./App.module.scss"
import { useLists } from "./redux/hooks/useLists"
import { List } from "./types/types"

const App = () => {
  const { lists } = useLists()
  const activeList: List = lists.find(list => list.active)

  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <TodoTitles lists={lists} />
        <TodoTitleForm />
      </div>

      <div className={styles.right}>
        <Greeting />
        <TodoForm />
        {activeList && <Todos activeList={activeList} />}
      </div>
    </div>
  )
}

export default App
