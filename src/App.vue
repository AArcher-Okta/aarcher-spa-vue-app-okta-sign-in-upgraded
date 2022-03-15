<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login" v-if="authState && !authState.isAuthenticated">Login</router-link>
    <router-link to="/profile" v-if="authState && authState.isAuthenticated">Protected Profile</router-link>
    <button v-if="authState && authState.isAuthenticated" v-on:click="logout()">Logout</button>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'app',
  methods: {
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style scoped>
a, p{
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
}
</style>