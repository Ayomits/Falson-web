<template>
  <div class="flex items-center justify-center sm:flex-col mt-[4%]">
    <div class="flex flex-col items-center justify-center gap-3">
      <h1 class="font-lato font-extrabold text-5xl">Falson</h1>
      <p class="sm:text-[12px] font-robot text-text opacity-80">
        Решении проблемы верификации на вашем сервере
      </p>
      <div class="sm:flex-col sm:gap-2 flex justify-center gap-10 mt-[15px]">
        <UiButton @click="goTo(`${backendUrl}/auth/discord/invite`, true)">
          Пригласить
        </UiButton>
        <UiButton
          @click="
            goTo(
              `${
                !authStore.isAuth
                  ? backendUrl + '/auth/discord/login'
                  : '/dashboard'
              }`,
              !authStore.isAuth
            )
          "
        >
          {{ authStore.isAuth ? "Мои серверы" : "Авторизироваться" }}
        </UiButton>
      </div>
    </div>
    <div class="sm:hidden">
      <UiLogo />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { backendUrl } from "~/constants";

const authStore = useAuthStore();

const goTo = async (route: string, external: boolean = false) => {
  return await navigateTo(route, { external });
};
</script>

<style></style>
