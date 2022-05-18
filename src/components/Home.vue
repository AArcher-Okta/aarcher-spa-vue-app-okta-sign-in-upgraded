<template>
  <div id="home">
    <h1>Customer-hosted Okta Sign In Widget Portal</h1>
    <div v-if="authState && !authState.isAuthenticated">
      <span class="hello">Hello, you are not </span>
      <router-link role="button" to="/login">
        signed in.
      </router-link>
    </div>

    <div v-if="authState && authState.isAuthenticated">
      <p>Welcome back{{claims.name}}!</p>
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
  }
}
</script>

<style scoped>
 p {
   color: #4fc08d;
 }
 span {
   color: #4fc08d; 
 }
 a {
   color: #fff;
   text-decoration: none;
 }
 a:hover {
   color: #4fc08d; 
 }
</style>