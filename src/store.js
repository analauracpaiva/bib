import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    authors: [],
    loans: [],
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setAuthors(state, authors) {
      state.authors = authors;
    },
    setLoans(state, loans) {
      state.loans = loans;
    },
  },
  actions: {
    fetchBooks({ commit }) {
      const books = [
        { id: 1, title: 'Livro 1', author: 'Autor 1' },
        { id: 2, title: 'Livro 2', author: 'Autor 2' },
      ];
      commit('setBooks', books);
    },
    fetchAuthors({ commit }) {
      const authors = [
        { id: 1, name: 'Autor 1' },
        { id: 2, name: 'Autor 2' },
      ];
      commit('setAuthors', authors);
    },
    fetchLoans({ commit }) {
      const loans = [
        { id: 1, book: 'Livro 1', borrower: 'Usuário 1' },
        { id: 2, book: 'Livro 2', borrower: 'Usuário 2' },
      ];
      commit('setLoans', loans);
    },
  },
});
