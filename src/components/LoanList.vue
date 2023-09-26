<template>
  <div>
    <h2>Lista de Empréstimos</h2>
    <ul>
      <li v-for="loan in loans" :key="loan.id">{{ loan.borrowerName }} emprestou {{ getBookTitle(loan.bookId) }}</li>
    </ul>
  </div>
</template>

<script>
import Loan from '@/models/Loan';
import Book from '@/models/Book';

export default {
  data() {
    return {
      loans: [
        new Loan(1, 1, '2023-10-01', 'João'),
        new Loan(2, 2, '2023-09-30', 'Maria'),
      ],
      books: [
        new Book(1, 'Livro 1', 1),
        new Book(2, 'Livro 2', 2),
      ]
    };
  },
  methods: {
    getBookTitle(bookId) {
      const book = this.books.find(b => b.id === bookId);
      return book ? book.title : 'Livro não encontrado';
    }
  }
};
</script>
