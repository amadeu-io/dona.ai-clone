export interface Todo {
  id: string
  todoTitle: string
  completed: boolean
}

export interface List {
  id: string
  listTitle: string
  emoji: string
  active: boolean
  todos: Todo[]
}

export type Lists = List[]
