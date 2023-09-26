import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BookList from './components/BookList.vue';
import AuthorList from './components/AuthorList.vue';
import LoanList from './components/LoanList.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/books', component: BookList },
  { path: '/authors', component: AuthorList },
  { path: '/loans', component: LoanList },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});

