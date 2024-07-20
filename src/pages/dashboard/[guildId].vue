<template>
  <div>
    {{ guildId }}
  </div>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";
const authStore = useAuthStore();
const guildId = useRoute().params.guildId;
const fetchGuildData = async () => {
  return await $fetch(`${backendUrl}/guild-settings/${guildId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authStore.accessToken!}`,
    },
  });
};
const fetchGeneralSettingsData = async () => {
  return await $fetch(`${backendUrl}/verifications/general/${guildId}/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authStore.accessToken!}`,
    },
  });
};

const queries = useQueries({
  queries: [
    {
      queryKey: ["guild-settings", guildId],
      queryFn: fetchGuildData,
    },
    {
      queryKey: ["general-settings", guildId],
      queryFn: fetchGeneralSettingsData,
    },
  ],
});
console.log(toRaw(queries.value))
</script>

<style></style>
