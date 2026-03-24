<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <div class="about">
    <h1 class="about__title">À propos</h1>
    <p class="about__text">
      Salut toi ! Bienvenue ;)
    </p>
  </div>
</template>

<style scoped>
.about__title {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.about__text {
  color: var(--color-text-light);
  line-height: 1.8;
}
</style>
