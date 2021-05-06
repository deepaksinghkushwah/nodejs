<template>
  <header>
    <ul class="nav-items">
      <li class="nav-link"><nuxt-link to="/">Home</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/users">Users</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/about">About</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/posts">Posts</nuxt-link></li>

    </ul>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: left;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: #000000;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 80%;  
}

.nav-items a, .nav-items a:hover, .nav-items a:active {
  color: white;
  text-decoration: none;
  width: 150px;
  background-color: yellowgreen;
  padding: 5px;
  border: 3px solid black;
  border-radius: 10px;
}
</style>