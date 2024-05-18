export interface Todo {
  id: string
  title: string
  completed: boolean
}

export interface TodoList {
  id: string
  title: string
  emoji: string
  active: boolean
  todos: Todo[]
}

export type TodoLists = TodoList[]
