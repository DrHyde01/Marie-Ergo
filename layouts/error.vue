<template>
  <div class="h-screen py-20">
    <h1 v-if="error.statusCode === 404">Page introuvable ⚠️</h1>
    <NuxtLink to="/">Retounez à l'accueil</NuxtLink>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  layout: 'default',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>
