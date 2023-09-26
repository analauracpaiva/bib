<template>
  <div id="app">
    <AuthorList />
    <LoanList />
    <BookList />
  </div>
</template>

<script>
import AuthorList from './components/AuthorList.vue';
import LoanList from './components/LoanList.vue';
import BookList from './components/BookList.vue';

export default {
  components: {
    AuthorList,
    LoanList,
    BookList,
  },
};
</script>

