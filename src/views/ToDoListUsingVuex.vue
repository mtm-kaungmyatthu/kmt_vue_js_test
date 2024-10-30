<template>
  <div>
    <h1>To-Do List</h1>
    <input
      v-model="newTodo"
      placeholder="Add a new task"
      @keyup.enter="addTodo"
    />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TodoList',
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
