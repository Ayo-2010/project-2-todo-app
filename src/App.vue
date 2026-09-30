<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-2xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-center text-secondary mb-8">Todo App</h1>

      <TodoStats />
      <TodoInput />
      <TodoFilters />
      <TodoList />
    </div>
  </div>
</template>

<script setup>
import TodoStats from './components/TodoStats.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFilters from './components/TodoFilters.vue'
import TodoList from './components/TodoList.vue'
</script>
