<template>
  <div>
    <LayoutHeader />
    <slot />
    <LayoutFooter class="mt-[150px] mb-[30px]" />
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
