<template>
  <div class="todo-app">
    <h1>Vue Todo List</h1>

    <!-- Input form to add new todo -->
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add new todo" />
      <button type="submit">Add Todo</button>
    </form>

    <!-- Todo List -->
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed" />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>

        <!-- Edit Button -->
        <button @click="editTodo(index)">Edit</button>

        <!-- Delete Button -->
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>

    <!-- Edit Modal -->
    <div v-if="isEditing">
      <h3>Edit Todo</h3>
      <input v-model="editedTodo" />
      <button @click="updateTodo">Update</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const todos = ref([])
    const newTodo = ref('')
    const editedTodo = ref('')
    const isEditing = ref(false)
    const currentTodoIndex = ref(null)

    // Add new todo
    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push({ text: newTodo.value.trim(), completed: false })
        newTodo.value = '' // clear input after adding
      }
    }

    // Delete todo
    const deleteTodo = index => {
      todos.value.splice(index, 1)
    }

    // Edit todo
    const editTodo = index => {
      isEditing.value = true
      editedTodo.value = todos.value[index].text
      currentTodoIndex.value = index
    }

    // Update todo after editing
    const updateTodo = () => {
      if (editedTodo.value.trim()) {
        todos.value[currentTodoIndex.value].text = editedTodo.value.trim()
        isEditing.value = false
        editedTodo.value = ''
        currentTodoIndex.value = null
      }
    }

    // Cancel edit
    const cancelEdit = () => {
      isEditing.value = false
      editedTodo.value = ''
      currentTodoIndex.value = null
    }

    return {
      todos,
      newTodo,
      editedTodo,
      isEditing,
      addTodo,
      deleteTodo,
      editTodo,
      updateTodo,
      cancelEdit,
    }
  },
}
</script>

<style scoped>
.todo-app {
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

.completed {
  text-decoration: line-through;
}

button {
  margin-left: 10px;
}

form {
  margin-bottom: 20px;
}
</style>
