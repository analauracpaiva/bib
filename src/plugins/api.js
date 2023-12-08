import axios from 'axios'
import { useAuthStore } from '../stores/auth'

const api = axios.create({
  baseURL: 'https://biblio-django-dev-afpp.4.us-1.fl0.io/api/'
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const { token } = authStore
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api