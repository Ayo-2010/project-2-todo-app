<template>
  <div class="space-y-2">
    <TransitionGroup name="list">
      <TodoItem
        v-for="todo in todoStore.filteredTodos"
        :key="todo.id"
        :todo="todo"
      />
    </TransitionGroup>
    <div v-if="todoStore.filteredTodos.length === 0" class="text-center text-gray-500 py-8">
      No todos to show
    </div>
  </div>
</template>

<script setup>
import { todoStore } from '../stores/todo.js'
import TodoItem from './TodoItem.vue'
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
