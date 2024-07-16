<template>
  <div class="flex items-center justify-center sm:flex-col mt-[4%]">
    <div class="flex flex-col items-center justify-center gap-3">
      <h1 class="font-lato font-extrabold text-5xl">Falson</h1>
      <p class="sm:text-[12px] font-robot text-text opacity-80">
        Решении проблемы верификации на вашем сервере
      </p>
      <div class="sm:flex-col sm:gap-2 flex justify-center gap-10 mt-[15px]">
        <button
          class="greatingsButton drop-shadow-2xl"
          @click="goTo(`${backendUrl}/auth/discord/invite`, true)"
        >
          Пригласить
        </button>
        <button
          class="greatingsButton drop-shadow-2xl"
          @click="
            goTo(`${!authStore.isAuth ? backendUrl + 'auth/login' : '/servers'}`)
          "
        >
        {{ authStore.isAuth ? "Мои серверы" : "Авторизироваться" }}
      </button>
      </div>
    </div>
    <div class="sm:hidden">
      <img src="@/assets/imgs/logo.svg" alt="" />
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

<style>
.greatingsButton {
  background-color: #353535;
  width: 150px;
  height: 50px;
  border-radius: 25px;
}
.greatingsButton:hover {
  background-color: #3d3d3d;
}
</style>
