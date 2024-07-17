<template>
  <Suspense>
    <NuxtLayout >
      <LazyGuildCard />
    </NuxtLayout>
    <template #fallback>
      <Preloader />
    </template>
  </Suspense>
  <NuxtPage />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
