import { reactive, computed, ref } from 'vue'
import { useLocalStorage } from '../composables/useLocalStorage.js'

const state = reactive({
  filter: 'all',
  nextId: Date.now(),
})

const todos = useLocalStorage('todos', [])

function addTodo(text) {
  todos.value.unshift({
    id: state.nextId++,
    text,
    completed: false,
    createdAt: Date.now(),
  })
}

function deleteTodo(id) {
  todos.value = todos.value.filter((t) => t.id !== id)
}

function toggleTodo(id) {
  const todo = todos.value.find((t) => t.id === id)
  if (todo) todo.completed = !todo.completed
}

function editTodo(id, newText) {
  const todo = todos.value.find((t) => t.id === id)
  if (todo) todo.text = newText
}

function clearCompleted() {
  todos.value = todos.value.filter((t) => !t.completed)
}

function setFilter(f) {
  state.filter = f
}

const filteredTodos = computed(() => {
  if (state.filter === 'active') return todos.value.filter((t) => !t.completed)
  if (state.filter === 'completed') return todos.value.filter((t) => t.completed)
  return todos.value
})

const stats = computed(() => ({
  total: todos.value.length,
  active: todos.value.filter((t) => !t.completed).length,
  completed: todos.value.filter((t) => t.completed).length,
}))

export const todoStore = reactive({
  state,
  todos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearCompleted,
  setFilter,
  filteredTodos,
  stats,
})
