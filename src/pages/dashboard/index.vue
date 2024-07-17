<template>
  <Suspense>
    <template #default>
      <NuxtLayout>
        <LazyGuildCard />
      </NuxtLayout>
    </template>
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
