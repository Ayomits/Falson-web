<template>
  <LayoutPreloader v-if="isLoading" />
  <div v-if="!isLoading">
    <LayoutHeader />
  </div>
  <NuxtPage />
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

// Preload
const isLoading = ref<boolean>(true);

// Fetching and caching
const authStore = useAuthStore();
const userStore = useUserStore();

if (authStore.isAuth && !userStore.user) {
  try {
    const res = await $fetch<UserDiscordResponse>(
      `${backendUrl}/users/@me/data`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
      }
    );

    userStore.saveUser(res);
  } catch {
    isLoading.value = true;
  }
}
isLoading.value = true;
</script>

<style></style>
