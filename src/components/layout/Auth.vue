<template>
  <div>
    <button
      v-if="!authState.isAuth"
      @click="redirectToLogin"
      class="bg-components font-text font-roboto p-2 rounded-[5px] hover:bg-components-hover hover:text-white"
    >
      Авторизироваться
    </button>

  </div>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";

const authState = useAuthStore();
const userState = useUserStore();
if (!userState.guildsData && !userState.userData) {
  await userState.fetchAll();
}

console.log(userState.userData);

const redirectToLogin = async () => {
  await navigateTo(`${backendUrl}/auth/discord/login/`, { external: true });
};
</script>

<style></style>
