import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import authService from '../services/auth'

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: null,
    loggedIn: false,
    user_id: null
  })

  const loggedIn = computed(() => state.loggedIn)
  const token = computed(() => state.token)
  const user_id = computed(() => state.user_id)

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return null
    }
  }

  const login = async (user) => {
    try {
      const data = await authService.login(user)
      state.token = data.access
      state.loggedIn = true
      state.user_id = parseJwt(data.access).user_id
    } catch (error) {
      state.token = null
      state.loggedIn = false
      return Promise.reject(error)
    }
  }

  const logout = () => {
    state.token = null
    state.loggedIn = false
  }

  return { loggedIn, token, user_id, login, logout }
})