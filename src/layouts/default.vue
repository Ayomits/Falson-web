<template>
  <div>
    <LazyLayoutHeader />
    <slot />
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

// Fetching and caching
const authStore = useAuthStore();
const userStore = useUserStore();

if (authStore.isAuth && !userStore.user) {
  try {
    const { status, data: res } = await useFetch<UserDiscordResponse>(
      `${backendUrl}/users/@me/data`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        server: false,
      }
    );

    userStore.saveUser(res.value as UserDiscordResponse);
  } catch {}
}
</script>

<style></style>
