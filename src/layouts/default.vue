<template>
  <div>
    <LayoutHeader />
    <slot />
  </div>
</template>

<script lang="ts" setup>
// META
const authStore = useAuthStore();
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
