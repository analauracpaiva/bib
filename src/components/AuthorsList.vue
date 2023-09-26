<template>
  <div>
    <h2>Lista de Autores</h2>
    <ul>
      <li v-for="author in authors" :key="author.id">{{ author.name }}</li>
    </ul>
  </div>
</template>

<script>
import Author from '@/models/Author'; 

export default {
  data() {
    return {
      authors: [
        new Author(1, 'Autor 1'),
        new Author(2, 'Autor 2'),
      ]
    };
  }
};
</script>


