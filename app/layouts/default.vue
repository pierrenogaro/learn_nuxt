<template>
  <div class="layout">
    <nav class="navbar">
      <span class="navbar__brand">Mon Blog</span>
      <NuxtLink to="/about" class="navbar__link">À propos</NuxtLink>
    </nav>
    <main class="content">
      <slot />
    </main>
  </div>
</template>

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

.navbar__link {
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;
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
