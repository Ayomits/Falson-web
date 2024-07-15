<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";
import type { UserDiscordResponse } from "~/types";

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
