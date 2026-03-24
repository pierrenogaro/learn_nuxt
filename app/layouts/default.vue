<template>
  <div class="layout">
    <nav class="navbar">
      <NuxtLink to="/" class="navbar__brand">Mon Blog</NuxtLink>
      <div class="navbar__links">
        <NuxtLink v-if="isAuthenticated" to="/about" class="navbar__link">À propos</NuxtLink>
        <span v-if="isAuthenticated" class="navbar__email">{{ userEmail }}</span>
        <button v-if="isAuthenticated" class="navbar__link" @click="logout">Déconnexion</button>
        <NuxtLink v-else to="/login" class="navbar__link">Connexion</NuxtLink>
      </div>
    </nav>
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated, userEmail, logout } = useAuth()
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
}

.navbar__brand {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-text);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.navbar__link {
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}

.navbar__link:hover {
  background-color: var(--color-bg);
}

.content {
  max-width: var(--max-width);
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>
