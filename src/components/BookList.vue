<script setup>
import { ref, onMounted } from 'vue'
import StarIcon from 'vue-material-design-icons/Star.vue'

import BookService from '@/services/books.js'

const books = ref([])

onMounted(async () => {
  const data = await BookService.getAllBooks()
  books.value = data
})
</script>

<template>
  <div class="row wrap">
    <div v-for="book in books" :key="book.id" class="card">
      <img :src="book.cover.url" :alt="book.title" />
      <div class="book-detail">
        <h3>{{ book.title }}</h3>
        <div class="book-year-rating">
          <p>{{ book.year }}</p>
          <div class="rating">
            <StarIcon v-for="n in book.rating" :key="n" fillColor="orange" size="18" />
            <StarIcon v-for="n in 5 - book.rating" :key="n" fillColor="gray" size="18" />
          </div>
        </div>
        <p>{{ book.genre }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.book-detail p {
  margin: 0;
}

.book-year-rating {
  display: flex;
  column-gap: 2rem;
}

.book-detail h3 {
  margin: 0;
  font-size: 1.2rem;
}
</style>
