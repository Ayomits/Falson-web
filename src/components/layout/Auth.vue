<template>
  <div>
    <button
      v-if="!state.isAuth"
      @click="redirectToLogin"
      class="bg-components font-text font-roboto p-2 rounded-[5px] hover:bg-components-hover hover:text-white"
    >
      Авторизироваться
    </button>
  </div>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";

const state = useAuthStore();
const redirectToLogin = async () => {
  await navigateTo(`${backendUrl}/auth/discord/login/`, {external: true});
};
</script>

<style></style>
