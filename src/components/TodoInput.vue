<template>
  <div class="mb-6">
    <form @submit.prevent="handleSubmit" class="flex gap-2">
      <input
        v-model="newTodo"
        type="text"
        placeholder="What needs to be done?"
        class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        @input="onInput"
      />
      <button
        type="submit"
        :disabled="!newTodo.trim()"
        class="px-6 py-2 bg-blue-700 text-white font-bold rounded-lg shadow hover:bg-blue-800 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { todoStore } from '../stores/todo.js'

const newTodo = ref('')

function handleSubmit() {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}

function onInput() {}
</script>
