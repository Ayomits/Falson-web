<template>
  <ClientOnly>
    <div
      class="flex flex-col items-center drop-shadow-2xl rounded-2xl w-auto h-auto bg-general p-4 px-10"
    >
      <div
        v-if="isLoading"
        class="flex justify-center items-center w-full h-full"
      >
        <UiSpinner />
      </div>
      <div v-else class="flex flex-col items-center">
        <NuxtImg
          class="rounded-full border-[1.5px] border-text"
          :src="data?.displayAvatarURL"
          width="150"
          :alt="data?.globalName"
        />
        <p class="mt-4 font-bold text-4xl font-roboto font-extrabold">
          {{ data?.globalName }}
        </p>
        <p class="mt-2 text-3xl opacity-80 text-text font-roboto font-normal">
          {{ role }}
        </p>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";
import type { GuildMemberResponse } from "~/types";

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const fetchGuilds = async () =>
  await $fetch<GuildMemberResponse>(
    `${backendUrl}/discord/users/${props.userId}`,
    {
      method: "get",
    }
  );
const { data, isLoading } = useQuery({
  queryKey: [`developer`, props.userId],
  queryFn: fetchGuilds,
});
</script>

<style></style>
