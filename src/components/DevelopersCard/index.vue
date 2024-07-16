<template>
  <div class="flex flex-col items-center drop-shadow-2xl rounded-2xl w-[325px] h-auto bg-general p-4">
    <div v-if="isLoading" class="flex justify-center items-center w-full h-full">
      <UiSpinner />
    </div>
    <div v-else class="flex flex-col items-center">
      <NuxtImg
        class="rounded-full border-[1.5px] border-text"
        :src="user?.displayAvatarURL"
        width="150"
        :alt="user?.globalName"
      />
      <p class="mt-4 font-bold text-2xl font-roboto font-bold">{{ user?.globalName }}</p>
      <p class="mt-2 text-sm text-text font-roboto">{{ role }}</p>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { backendUrl, DefaultAvatars } from "~/constants";
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

const isLoading = ref<boolean>(true);

const { data } = await useFetch<GuildMemberResponse>(
  `${backendUrl}/discord/users/${props.userId}`
);
const user = data.value;
isLoading.value = false;

</script>

<style></style>
