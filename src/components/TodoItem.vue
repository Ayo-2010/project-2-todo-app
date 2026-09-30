<template>
  <div class="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="toggle"
      class="w-5 h-5 text-primary rounded focus:ring-primary"
    />

    <span
      v-if="!editing"
      :class="['flex-1', todo.completed ? 'line-through text-gray-400' : 'text-gray-800']"
    >
      {{ todo.text }}
    </span>

    <input
      v-else
      v-model="editText"
      type="text"
      class="flex-1 px-2 py-1 border border-gray-300 rounded"
      @blur="saveEdit"
      @keyup.enter="saveEdit"
      ref="editInput"
    />

    <button
      v-if="!editing"
      @click="startEdit"
      class="text-gray-500 hover:text-primary transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </button>

    <button
      @click="remove"
      class="text-gray-500 hover:text-red-500 transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { todoStore } from '../stores/todo.js'

const props = defineProps({
  todo: { type: Object, required: true },
})

const editing = ref(false)
const editText = ref(props.todo.text)
const editInput = ref(null)

function toggle() {
  todoStore.toggleTodo(props.todo.id)
}

function startEdit() {
  editing.value = true
  editText.value = props.todo.text
  nextTick(() => editInput.value?.focus())
}

function saveEdit() {
  if (editText.value.trim()) {
    todoStore.editTodo(props.todo.id, editText.value.trim())
  }
  editing.value = false
}

function remove() {
  todoStore.deleteTodo(props.todo.id)
}
</script>
