<template>
  <div>
    <div>
      <button
        v-if="!authStore.isAuth"
        @click="redirectToLogin"
        class="bg-components font-text font-roboto p-2 rounded-[5px] hover:bg-components-hover hover:text-white"
      >
        Авторизироваться
      </button>
      <div
        v-if="authStore.isAuth"
        class="flex gap-4 items-center font-dmsans font-bold cursor-pointer hover:text-white"
      >
        <p class="mt-[10px]">{{ userStore.user?.global_name }}</p>
        <img
          :src="getUserAvatar"
          class="rounded-3xl"
          width="50"
          alt="user avatar"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";

const userStore = useUserStore();
const authStore = useAuthStore();

const getUserAvatar = computed(() => {
  return userStore.user
    ? `https://cdn.discordapp.com/avatars/${userStore.user.id}/${userStore.user.avatar}.png`
    : "";
});

const redirectToLogin = async () => {
  await navigateTo(`${backendUrl}/auth/discord/login`, { external: true });
};
</script>

<style scoped>
p:hover {
  color: white;
}
</style>
