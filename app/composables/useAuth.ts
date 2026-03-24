export const useAuth = () => {
  const token = useCookie('auth_token')

  const isAuthenticated = computed(() => !!token.value)

  const userEmail = computed(() => {
    if (!token.value) return null
    try {
      const payload = JSON.parse(atob(token.value.split('.')[1]))
      return payload.email || payload.username || null
    } catch {
      return null
    }
  })

  const login = async (email: string, password: string) => {
    const response = await $fetch<{ token: string }>(
      'https://back-summits.pierrenogaro.com/api/login_check',
      {
        method: 'POST',
        body: { email, password },
      }
    )
    token.value = response.token
  }

  const logout = () => {
    token.value = null
    navigateTo('/login')
  }

  return { token, isAuthenticated, userEmail, login, logout }
}
