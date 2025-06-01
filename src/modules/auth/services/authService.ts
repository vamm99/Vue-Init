import api from '@/core/api'
import type { LoginCredentials, AuthResponse } from '../types/auth'

const API_URL = import.meta.env.VITE_API_URL

export const authService = {
  async login(data: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post(`${API_URL}/login`, data)
    return response.data
  },
  // async register(data: LoginCredentials) {
  //     const response = await api.post(`${API_URL}/register`, data);
  //     return response.data;
  // },
  // async logout() {
  //     const response = await api.post(`${API_URL}/logout`);
  //     return response.data;
  // },
  // async me() {
  //     const response = await api.get(`${API_URL}/me`);
  //     return response.data;
  // },
}
