<template>
  <div id="app">
    <h1>User Management</h1>

    <!-- Form to add a new user -->
    <div>
      <input v-model="newUser.name" placeholder="Enter user name" />
      <input v-model="newUser.email" placeholder="Enter user email" />
      <button @click="addUser">Add User</button>
    </div>

    <!-- List of users -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>

    <!-- List of users -->
    <ul>
      <li v-for="user in users" :key="user.id">
        <div v-if="editedUserId === user.id">
          <input v-model="editedUser.name" />
          <input v-model="editedUser.email" />
          <button @click="updateUser(user.id)">Save</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
        <div v-else>
          {{ user.name }} - {{ user.email }}
          <button @click="editUser(user)">Edit</button>
          <button @click="deleteUser(user.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { db } from '../stores/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

export default {
  setup() {
    const users = ref([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ])

    const newUser = ref({ name: '', email: '' })
    const editedUser = ref(null)
    const editedUserId = ref(null)

    // Add new user
    const addUser = () => {
      if (newUser.value.name && newUser.value.email) {
        const newUserId = users.value.length + 1
        users.value.push({
          id: newUserId,
          ...newUser.value,
        })
        newUser.value = { name: '', email: '' } // Reset form
      }
    }

    // Edit a user
    const editUser = user => {
      editedUserId.value = user.id
      editedUser.value = { ...user } // Copy the user
    }

    // Cancel edit
    const cancelEdit = () => {
      editedUserId.value = null
      editedUser.value = null
    }

    // Update user details
    const updateUser = id => {
      const index = users.value.findIndex(user => user.id === id)
      if (index !== -1) {
        users.value[index] = { ...editedUser.value, id }
        cancelEdit()
      }
    }

    // Delete a user
    const deleteUser = id => {
      users.value = users.value.filter(user => user.id !== id)
    }

    // Fetch users from Firebase Firestore
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testing'))
        // const users = querySnapshot.docs.map(doc => doc.data())
        console.log(users)
      } catch (error) {
        // If there's an error, connection might have failed
        console.error('Error connecting to Firestore:', error)
      }
      // users.value = querySnapshot.docs.map(doc => ({
      //   id: doc.id,
      //   ...doc.data(),
      // }))
    }

    // Call fetchUsers when component is mounted
    onMounted(() => {
      console.log('Mounted:')
      fetchUsers()
      console.log('Fetched:')
    })

    return {
      users,
      newUser,
      editedUser,
      editedUserId,
      addUser,
      editUser,
      cancelEdit,
      updateUser,
      deleteUser,
    }
  },
}
</script>

<style>
/* Basic styling */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
input {
  margin-right: 10px;
}
button {
  margin-left: 10px;
}
</style>
