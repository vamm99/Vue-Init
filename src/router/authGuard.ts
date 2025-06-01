import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {

  // Verificar autenticación
  const token = localStorage.getItem('auth_token')
  const isAuthenticated = !!token

  // Verificar si la ruta requiere autenticación
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // Caso 1: Ruta protegida sin autenticación
  if (requiresAuth && !isAuthenticated) {
    return next({
      name: 'login',
      query: {
        redirect: to.fullPath,
        reason: 'auth-required'
      }
    })
  }

  // Caso 2: Usuario autenticado intenta ir al login
  if (to.name === 'login' && isAuthenticated) {
    return next({ name: 'dashboard' })
  }

  // Caso 3: Acceso permitido
  next()
}
