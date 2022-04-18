<template>
<div>
    <div class="nav">
      <router-link to="/">Welcome</router-link> 
      <router-link to="/home">Home</router-link> 
      <router-link :to="{ name: 'About' }">About</router-link> 
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link> 
      
    </div>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go Back</button>
    <button @click="forward">Go Farward</button>

  <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Welcome'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

.nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
