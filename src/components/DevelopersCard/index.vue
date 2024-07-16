<template>
  <div class="bg-general">
    <p v-if="isLoading">
      
    </p>
    <img src="" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";
import type { UserDiscordResponse } from "~/types";

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

const user = await useFetch<UserDiscordResponse>(
  `${backendUrl}/discord/users/${props.userId}`
).then(() => (isLoading.value = true));
</script>

<style></style>
