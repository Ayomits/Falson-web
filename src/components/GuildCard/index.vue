<template>
  <div></div>
</template>

<script lang="ts" setup>
import { backendUrl } from '~/constants';
import type { UserGuildResponse } from '~/types';

const authState = useAuthStore();
const fetchGuilds = async () => {
  return await $fetch<UserGuildResponse[]>(`${backendUrl}/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${authState.accessToken}`,
    },
    method: "GET",
  });
};
const { data, suspense } = useQuery({
  queryKey: ["guilds"],
  queryFn: fetchGuilds,
});

await suspense();
</script>

<style></style>
