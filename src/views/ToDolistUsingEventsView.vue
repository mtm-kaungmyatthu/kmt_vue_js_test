<template>
  <div class="todo-app">
    <h1>Vue Todo List</h1>

    <!-- TodoForm component to add a new todo -->
    <todo-form @add-todo="addTodo"></todo-form>

    <!-- TodoList component to show todo list -->
    <todo-list
      :todos="todos"
      @delete-todo="deleteTodo"
      @edit-todo="editTodo"
      @update-todo="updateTodo"
    ></todo-list>
  </div>
</template>

<script>
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'

export default {
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    // Add a new todo
    addTodo(newTodo) {
      this.todos.push({ text: newTodo, completed: false })
    },

    // Delete a todo
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },

    // Edit a todo
    editTodo(index) {
      this.todos[index].isEditing = true
    },

    // Update a todo after editing
    updateTodo({ index, updatedText }) {
      this.todos[index].text = updatedText
      this.todos[index].isEditing = false
    },
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
</style>
