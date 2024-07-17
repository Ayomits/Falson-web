<template>
  <div>
    <Suspense v-if="authStore.isAuth">
      <template #default>
        <LayoutHeader />
      </template>
      <template #fallback>
        <Preloader />
      </template>
    </Suspense>
    <LayoutHeader v-else/>
    <slot />
  </div>
</template>

<script lang="ts" setup>
// META
const authStore = useAuthStore()
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
