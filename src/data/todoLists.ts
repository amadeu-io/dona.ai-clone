import { v4 as uuidv4 } from "uuid"
import type { TodoLists } from "../types/todoTypes"

export const initTodoLists: TodoLists = [
  {
    id: uuidv4(),
    title: "Work Tasks",
    emoji: "🏋️",
    active: false,
    todos: [
      { id: uuidv4(), title: "Finish project report", completed: false },
      { id: uuidv4(), title: "Email client feedback", completed: true },
      { id: uuidv4(), title: "Prepare presentation", completed: false },
    ],
  },
  {
    id: uuidv4(),
    title: "Home Chores",
    emoji: "🏠",
    active: true,
    todos: [
      { id: uuidv4(), title: "Clean the kitchen", completed: true },
      { id: uuidv4(), title: "Mow the lawn", completed: false },
      { id: uuidv4(), title: "Wash the car", completed: false },
    ],
  },
  {
    id: uuidv4(),
    title: "Shopping List",
    emoji: "🍏",
    active: false,
    todos: [
      { id: uuidv4(), title: "Buy groceries", completed: false },
      { id: uuidv4(), title: "Get new shoes", completed: true },
      { id: uuidv4(), title: "Purchase gift", completed: false },
    ],
  },
]
