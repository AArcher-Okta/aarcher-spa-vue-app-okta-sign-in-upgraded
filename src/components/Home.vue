<template>
  <div id="home">
    <h1>Custom Login Page with Sign In Widget</h1>
    <div v-if="!this.$root.authenticated">
      <p>Hello, Vue.</p>
      <router-link role="button" to="/login">
        Login
      </router-link>
    </div>

    <div v-if="this.$root.authenticated">
      <p>Welcome back, {{claims.name}}!</p>
      <p>
        You have successfully authenticated with Okta!
        Visit the <a href="/profile">My Profile</a> page to take a look inside the ID token.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      claims: ''
    }
  },
  created () { this.setup() },
  methods: {
    async setup () {
      if (this.$root.authenticated)
        this.claims = await this.$auth.getUser()
    }
  }
}
</script>