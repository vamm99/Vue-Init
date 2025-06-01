export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  password_confirmation: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
  }
}

// Nota: Aquí se define el tipo de respuesta que se espera de la API
