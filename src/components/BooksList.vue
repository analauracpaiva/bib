<template>
  <div>
    <h2>Lista de Livros</h2>
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.title }} ({{ book.author }})</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  created() {
    this.$store.dispatch('fetchBooks');
  },
};
</script>
