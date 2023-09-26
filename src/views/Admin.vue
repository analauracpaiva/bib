<template>
  <div>
    <h1>Página de Administração da Biblioteca</h1>
    <router-link to="/books">Livros</router-link>
    <router-link to="/authors">Autores</router-link>
    <router-link to="/loans">Empréstimos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>
