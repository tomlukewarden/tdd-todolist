class Todo {
  constructor(id, text) {
    this.id = id
    this.text = text
    this.completed = false
  }
}

class TodoList {
  constructor() {
    this.todos = []
    this.currentId = 1
  }

  create(text) {
    const todo = new Todo(this.currentId++, text)
    this.todos.push(todo)
    return todo
  }

  setCompletedById(id) {
    const todo = this.todos.find((t) => t.id === id)
    if (todo) {
      todo.completed = true
    }
  }

  getAll() {
    return this.todos
  }
}

module.exports = {
  Todo,
  TodoList
}