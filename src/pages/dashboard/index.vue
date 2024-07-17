<template>
  <NuxtLayout>
    <UiSearchBar  class="flex justify-center" />

    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";
import { type UserGuildResponse } from "~/types";

definePageMeta({
  middleware: "auth",
});

const authState = useAuthStore();
const {status, data: guilds} = await useFetch<UserGuildResponse[]>(
  `${backendUrl}/users/@me/guilds`,
  {
    headers: {
      Authorization: `Bearer ${authState.accessToken}`,
    },
    method: "GET",
    server: false,
    lazy: true
  }
);
</script>

<style></style>
