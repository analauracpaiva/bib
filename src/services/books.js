import api from '../plugins/api'

class BookService {
  async getAllBooks() {
    const response = await api.get('/books/')
    return response.data
  }
  async saveBook(book) {
    let response
    if (book.id) {
      response = await api.put(`/book/${book.id}/`, book)
    } else {
      response = await api.post('/book/', book)
    }
    return response.data
  }
}

export default new BookService()
