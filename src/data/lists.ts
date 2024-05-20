import { v4 as uuidv4 } from "uuid"
import type { Lists } from "../types/types"

export const initLists: Lists = [
  {
    id: uuidv4(),
    listTitle: "Work Tasks",
    emoji: "🏋️",
    active: false,
    todos: [
      { id: uuidv4(), todoTitle: "Finish project report", completed: false },
      { id: uuidv4(), todoTitle: "Email client feedback", completed: true },
      { id: uuidv4(), todoTitle: "Prepare presentation", completed: false },
    ],
  },
  {
    id: uuidv4(),
    listTitle: "Home Chores",
    emoji: "🏠",
    active: true,
    todos: [
      { id: uuidv4(), todoTitle: "Clean the kitchen", completed: true },
      { id: uuidv4(), todoTitle: "Mow the lawn", completed: false },
      { id: uuidv4(), todoTitle: "Wash the car", completed: false },
    ],
  },
  {
    id: uuidv4(),
    listTitle: "Shopping List",
    emoji: "🍏",
    active: false,
    todos: [
      { id: uuidv4(), todoTitle: "Buy groceries", completed: false },
      { id: uuidv4(), todoTitle: "Get new shoes", completed: true },
      { id: uuidv4(), todoTitle: "Purchase gift", completed: false },
    ],
  },
]
