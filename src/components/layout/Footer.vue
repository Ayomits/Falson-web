<template>
  <div
    class="flex items-start justify-between max-w-[1200px] mx-auto sm:flex-col sm:max-w-[200px] sm:gap-5"
  >
    <div class="flex flex-col items-start sm:items-start">
      <h4>Информация</h4>
      <p class="" @click="goTo(PrivacyLink, true)">
        Политика конфидециальности
      </p>
      <p class="" @click="goTo(TOSLink, true)">TOS</p>
    </div>

    <div class="flex flex-col items-start sm:items-start">
      <h4>Документация</h4>
      <p class="" @click="goTo('/commands')">Команды</p>
    </div>
    <div class="flex flex-col items-start sm:items-start">
      <h4>Контакты</h4>
      <p class="" @click="goTo(SupportServerLink, true)">Discord</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PrivacyLink, SupportServerLink, TOSLink } from "~/constants";

const goTo = async (route: string, external: boolean = false) => {
  await navigateTo(route, { external });
};
</script>

<style scoped>
h4 {
  font-size: 22px;
  font-weight: bold;
}
p {
  cursor: pointer;
  margin-top: 10px;
}
p:hover {
  color: #fff;
}
</style>
