import { useState, useEffect } from "react"
import { useLists } from "./redux/hooks/useLists"
import Todos from "./components/Todos/Todos"
import TodoTitles from "./components/Lists/Lists"
import TodoForm from "./components/Todos/TodoForm/TodoForm"
import TodoTitleForm from "./components/Lists/ListForm/ListForm"
import Greeting from "./components/Greeting/Greeting"
import styles from "./App.module.scss"
import { List } from "./types/types"
import Drawer from "@mui/material/Drawer"
import CloseIcon from "./icons/CloseIcon"
import BurgerIcon from "./icons/BurgerIcon"

const SideDrawer = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  return (
    <>
      <BurgerIcon className={styles.burgerIcon} onClick={toggleDrawer(true)} />
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        classes={{ paper: styles.drawerPaper }}
      >
        <CloseIcon className={styles.closeIcon} onClick={toggleDrawer(false)} />
        {children}
      </Drawer>
    </>
  )
}

const App = () => {
  const { lists } = useLists()
  const activeList: List = lists.find(list => list.active)

  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setShowDrawer(window.innerWidth < 1015)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={styles.app}>
      {showDrawer ? (
        <SideDrawer>
          <aside className={styles.left}>
            <TodoTitles lists={lists} />
            <TodoTitleForm />
          </aside>
        </SideDrawer>
      ) : (
        <aside className={styles.left}>
          <TodoTitles lists={lists} />
          <TodoTitleForm />
        </aside>
      )}

      <main className={styles.right}>
        <div className={styles.rightContainer}>
          <Greeting />
          <TodoForm />
          {activeList && <Todos activeList={activeList} />}
        </div>
      </main>
    </div>
  )
}

export default App
