<template>
  <div>
    <h1>Welcome to the Dashboard!</h1>
    <p>This is a protected area. You are logged in!</p>
  </div>
</template>

<script>
export default {
  created() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      // Redirect to login page if not logged in
      this.$router.push('/login')
    }
  }
}
</script>
