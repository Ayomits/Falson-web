<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <UiSearchBar v-model="guildName" />
    <div
      class="sm:flex sm:flex-col grid grid-cols-3 max-w-[1200px] my-20 mx-auto gap-[50px]"
    >
      <GuildCard
        :guild="guild"
        v-for="guild in filteredGuilds"
        :key="guild.guildId"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { backendUrl } from "~/constants";
import type { UserGuildResponse } from "~/types";

const authState = useAuthStore();
const guildName = ref<string>("");

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

const sortInvitedGuilds = (guilds: UserGuildResponse[]) => {
  const sortedGuilds = [];
  for (let i = 0; i < guilds.length; i++) {
    if (!guilds[i].invited) {
      sortedGuilds.push(guilds[i]);
    } else {
      sortedGuilds.unshift(guilds[i]);
    }
  }
  return sortedGuilds;
};

const allGuilds = ref<UserGuildResponse[]>(
  sortInvitedGuilds(data.value as UserGuildResponse[])
);
const filteredGuilds = ref<UserGuildResponse[]>([]);

const filterGuilds = (name: string) => {
  if (!name) {
    filteredGuilds.value = allGuilds.value;
  } else {
    filteredGuilds.value = allGuilds.value.filter((guild) =>
      guild.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
};

// Watch for changes in guildName and filter the guilds accordingly
watch(guildName, (newValue) => {
  filterGuilds(newValue);
});

// Initial filtering
filterGuilds(guildName.value);
</script>
