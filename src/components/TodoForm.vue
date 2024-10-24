<template>
  <form @submit.prevent="submitTodo">
    <input v-model="newTodo" placeholder="Add new todo" />
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    };
  },
  methods: {
    submitTodo() {
      if (this.newTodo.trim()) {
        this.$emit('add-todo', this.newTodo.trim()); // Emit add-todo event
        this.newTodo = ''; // Clear input
      }
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
</style>
