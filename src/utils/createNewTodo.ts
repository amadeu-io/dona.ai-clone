import { v4 as uuidv4 } from "uuid"
import { Todo } from "../types/types"

const createNewTodo = (todoTitle: string = "New Todo"): Todo => {
  return {
    id: uuidv4(),
    todoTitle,
    completed: false,
  }
}

export default createNewTodo
