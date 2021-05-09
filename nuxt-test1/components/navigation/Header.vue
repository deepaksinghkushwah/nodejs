<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-link"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/users">Users</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/posts">Posts</nuxt-link></li>
        </ul>
      </div>

      
    </nav>
  </header>
</template>
<style scoped>
.nav-link a{
  color: white;
  text-decoration: none;
}
a.nuxt-link-exact-active {
  color: red;
}
</style>