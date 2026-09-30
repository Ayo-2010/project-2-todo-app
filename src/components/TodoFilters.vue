<template>
  <div class="flex justify-center gap-2 mb-6">
    <button
      v-for="f in filters"
      :key="f.value"
      @click="setFilter(f.value)"
      :class="[
        'px-4 py-2 rounded-lg transition-colors',
        todoStore.state.filter === f.value
          ? 'bg-primary text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
      ]"
    >
      {{ f.label }}
    </button>
  </div>
</template>

<script setup>
import { todoStore } from '../stores/todo.js'

const filters = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

function setFilter(filter) {
  todoStore.setFilter(filter)
}
</script>
