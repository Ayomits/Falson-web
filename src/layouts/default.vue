<template>
  <NuxtLoadingIndicator />
  <div>
    <Suspense>
      <LazyLayoutHeader />
      <template #fallback>
        <Preloader />
      </template>
    </Suspense>
    <Suspense>
      <Guilds />
      <template #fallback>
        <Preloader />
      </template>
    </Suspense>
    <slot />
  </div>
</template>

<script lang="ts" setup>
// META
useHead({
  title: "Falson",
  meta: [
    {
      name: `description`,
      content: `Лучший бот для решения проблемы верификации на вашем сервере`,
    },
  ],
});
</script>

<style></style>
