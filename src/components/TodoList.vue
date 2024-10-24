<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <!-- Checkbox to mark as completed -->
      <input type="checkbox" v-model="todo.completed" />

      <!-- Todo text or editable input if in edit mode -->
      <span v-if="!todo.isEditing" :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <input v-else v-model="editText" @keyup.enter="submitEdit(index)" />

      <!-- Edit Button -->
      <button @click="startEdit(index)">Edit</button>

      <!-- Update Button when editing -->
      <button v-if="todo.isEditing" @click="submitEdit(index)">Update</button>

      <!-- Delete Button -->
      <button @click="deleteTodo(index)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todos'],
  data() {
    return {
      editText: ''
    };
  },
  methods: {
    // Start editing a todo
    startEdit(index) {
      this.$emit('edit-todo', index);
      this.editText = this.todos[index].text;
    },

    // Submit edit
    submitEdit(index) {
      if (this.editText.trim()) {
        this.$emit('update-todo', { index, updatedText: this.editText.trim() });
      }
    },

    // Delete a todo
    deleteTodo(index) {
      this.$emit('delete-todo', index);
    }
  }
};
</script>

<style scoped>
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
</style>
