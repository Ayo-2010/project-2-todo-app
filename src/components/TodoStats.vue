<template>
  <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
    <span class="text-gray-700">
      <span class="font-semibold">{{ todoStore.stats.active }}</span> items left
    </span>
    <span class="text-gray-500">
      <span class="font-semibold">{{ todoStore.stats.completed }}</span> completed
    </span>
    <button
      v-if="todoStore.stats.completed > 0"
      @click="todoStore.clearCompleted()"
      class="text-red-500 hover:text-red-700 transition-colors"
    >
      Clear Completed
    </button>
  </div>
</template>

<script setup>
import { todoStore } from '../stores/todo.js'
</script>
