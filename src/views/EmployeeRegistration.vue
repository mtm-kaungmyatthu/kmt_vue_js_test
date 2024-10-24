<template>
  <div class="registration-container">
    <h2>Employee Registration</h2>
    <form @submit.prevent="registerEmployee">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="position">Position:</label>
        <input type="text" v-model="position" required />
      </div>
      <div>
        <label for="salary">Salary:</label>
        <input type="number" v-model="salary" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../stores/firebase' // Import the Firebase Firestore database

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const position = ref('')
    const salary = ref(0)
    const message = ref('')

    const registerEmployee = async () => {
      if (name.value && email.value) {
        try {
          await addDoc(collection(db, 'employees'), {
            name: name.value,
            email: email.value,
            // position: position.value,
            // salary: salary.value,
          })
          message.value = 'Employee registered successfully!'
          name.value = ''
          email.value = ''
          position.value = ''
          salary.value = 0
        } catch (error) {
          message.value = 'Error registering employee: ' + error.message
        }
      } else {
        message.value = 'Please fill in all fields.'
      }
    }

    return {
      name,
      email,
      position,
      salary,
      message,
      registerEmployee,
    }
  },
}
</script>

<style scoped>
.registration-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

p {
  margin-top: 10px;
  color: green;
}
</style>
