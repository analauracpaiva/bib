<script setup></script>

<template>
    <nav>
      <div class="NavImg">
        <img class="Img" src="./assets/imgs/logo.png">
      </div>
      <div class="navLinks">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Acervo">Acervo</RouterLink>
      </div>
    </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.NavImg{
  background-color: white;
  padding: 0.5%;
}
.Img{
  width: 50%;
}
.navLinks{
  width: 100%;
}
header {
  line-height: 1.5;
  height: 5rem;
}

nav {
  width: 100%;
  text-align: center;
  background-color: #ffffff;
  color: rgb(11, 141, 255);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 2px 5px 1px gray;
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
