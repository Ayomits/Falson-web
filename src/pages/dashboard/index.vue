<template>
  <Suspense>
    <template #default>
      <NuxtLayout>
        <GuildList />
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
