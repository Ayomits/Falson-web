<template>
  <div>
    <div v-if="loading" class="preloader">Загрузка...</div>
    <div v-else>
      <button
        v-if="!authState.isAuth"
        @click="redirectToLogin"
        class="bg-components font-text font-roboto p-2 rounded-[5px] hover:bg-components-hover hover:text-white"
      >
        Авторизироваться
      </button>
      <div v-else class="flex gap-4 items-center font-dmsans font-bold">
        <p class="mt-[10px]">{{ userData?.global_name }}</p>
        <img
          class="rounded-3xl"
          v-if="userData"
          width="50"
          :src="getUserAvatar"
          alt="user avatar"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useAuthStore } from "~/stores/auth";
import { backendUrl } from "~/constants";
import type { UserDiscordResponse } from "~/types";
import { useAsyncData } from "#app";

const authState = useAuthStore();
const loading = ref(true);

const { data: userData, error } = await useAsyncData("userData", async () => {
  if (authState.isAuth) {
    const response = await fetch(`${backendUrl}/users/@me/data`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authState.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    return (await response.json()) as UserDiscordResponse;
  }
  return null;
});

if (error.value) {
  console.error("Error fetching user data:", error.value);
}

loading.value = false;

const getUserAvatar = computed(() => {
  return userData.value
    ? `https://cdn.discordapp.com/avatars/${userData.value.id}/${userData.value.avatar}.png`
    : "";
});

const redirectToLogin = async () => {
  await navigateTo(`${backendUrl}/auth/discord/login/`, { external: true });
};
</script>
