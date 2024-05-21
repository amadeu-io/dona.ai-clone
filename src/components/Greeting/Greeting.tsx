import styles from "./Greeting.module.scss"

const Greeting = () => {
  const today = new Date()
  const dayName = today.toLocaleString("en-US", { weekday: "long" })
  const monthName = today.toLocaleString("en-US", { month: "long" })
  const day = today.getDate()

  return (
    <header className={styles.greeting}>
      <h1>Good Morning, User</h1>
      <h2>
        It's {dayName}, {monthName} {day}
      </h2>
    </header>
  )
}

export default Greeting
