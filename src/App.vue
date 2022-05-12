<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login" v-if="authState && !authState.isAuthenticated">Login</router-link>
    <router-link to="/profile" v-if="authState && authState.isAuthenticated">Protected Profile</router-link> <!--|-->
    <!-- <router-link to="/edit">Edit</router-link> -->
  </div>
  <div>
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

// export default {
//   name: 'App',
//   data: () => ({
//     title: "Vue Groups",
//     authenticated: false
//   }),
//   watch: {
//     '$route': 'isAuthenticated'
//   },
//   methods: {
//     async isAuthenticated () {
//       this.authenticated = await this.$auth.isAuthenticated()
//     },
//     login () {
//       this.$auth.loginRedirect('/')
//     },
//     async logout () {
//       await this.$auth.logout();
//       await this.isAuthenticated();
//       if (this.$route.path !== '/') this.$router.push({ path: '/' })
//     }
//   },
//   created() {
//     this.isAuthenticated();
//   }
// }
</script>

<style scoped>
a, p{
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
}
</style>