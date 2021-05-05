<template>
  <header>
    <ul class="nav-items">
      <li class="nav-link"><nuxt-link to="/">Home</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/users">Users</nuxt-link></li>
    </ul>
  </header>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  align-items: center;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}
</style>