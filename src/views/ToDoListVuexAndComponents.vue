<template>
  <div class="todo-app">
    <h1>Vue Todo List</h1>

    <!-- TodoForm component to add a new todo -->
    <todo-form @add-todo="addTodo"></todo-form>

    <!-- TodoList component to show todo list -->
    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoForm,
    TodoList,
  },
  setup() {
    const store = useStore()

    // State
    const newTodo = ref('')

    // Getters
    const todos = computed(() => store.state.todos)

    // Methods
    const addTodo = () => {
      if (newTodo.value.trim()) {
        store.dispatch('addTodo', newTodo.value)
        newTodo.value = ''
      }
    }

    const removeTodo = index => {
      store.dispatch('removeTodo', index)
    }

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
    }
  },
}
</script>

<style scoped>
input {
  margin-bottom: 10px;
  padding: 5px;
}
button {
  margin-left: 10px;
}
</style>

<style scoped>
.todo-app {
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}
</style>
