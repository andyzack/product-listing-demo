<template>
  <div id="nav" class="p-10">
    <router-link to="/" class="text-red-500 underline font-bold">Home</router-link> |
    <router-link to="/about" class="text-red-500 underline font-bold">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  @apply text-red-600;
}
</style>
