<template>
  <div class="login">
    <div class="login__card">
      <h2 class="login__title">Connexion</h2>

      <p v-if="errorMsg" class="login__error">{{ errorMsg }}</p>

      <form class="login__form" @submit.prevent="handleLogin">
        <label class="login__label" for="email">Email</label>
        <input id="email" v-model="email" type="email" class="login__input" placeholder="ton@email.com" required />

        <label class="login__label" for="password">Mot de passe</label>
        <input id="password" v-model="password" type="password" class="login__input" placeholder="••••••••" required />

        <button type="submit" class="login__btn" :disabled="loading">
          {{ loading ? 'Connexion...' : 'Se connecter' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { login, isAuthenticated } = useAuth()

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const loading = ref(false)

if (isAuthenticated.value) {
  navigateTo('/')
}

const handleLogin = async () => {
  loading.value = true
  errorMsg.value = ''
  try {
    await login(email.value, password.value)
    navigateTo('/')
  } catch {
    errorMsg.value = 'Identifiants incorrects'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  padding-top: 4rem;
}

.login__card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 380px;
}

.login__title {
  margin-bottom: 1.5rem;
}

.login__error {
  color: #dc2626;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.login__form {
  display: flex;
  flex-direction: column;
}

.login__label {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.login__input {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.login__input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.login__btn {
  padding: 0.6rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
}

.login__btn:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
}

.login__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
