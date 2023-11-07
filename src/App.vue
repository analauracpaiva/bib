<script setup></script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/generos">Gêneros</RouterLink>
      <RouterLink to="/filmes">Livros</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 5rem;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  background-color: #5a5df0;
  color: aliceblue;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  /* display: inline-block; */
  padding: 0 1rem;
  font-size: 1.5rem;
  text-decoration: none;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
