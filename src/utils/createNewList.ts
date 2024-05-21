import { v4 as uuidv4 } from "uuid"
import { List } from "../types/types"
import getRandomEmoji from "./getRandomEmoji"

const createNewList = (listTitle: string = "New List"): List => {
  return {
    id: uuidv4(),
    listTitle,
    emoji: getRandomEmoji(),
    active: true,
    todos: [],
  }
}

export default createNewList
