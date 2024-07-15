<template>
  <div class="flex gap-5 font-dmsans font-bold items-center">
    <RouterLink :to="FalsonRoutes.HOME"> Главная </RouterLink>
    <RouterLink :to="FalsonRoutes.COMMANDS"> Команды </RouterLink>
    <RouterLink :to="FalsonRoutes.HISTORY"> История </RouterLink>
    <RouterLink :to="FalsonRoutes.STATUS"> Статус </RouterLink>
    <RouterLink :to="FalsonRoutes.DONATE"> Поддержите нас </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { FalsonRoutes } from "@/constants";
</script>

<style scoped>
a:hover {
  color: white;
  transition-delay: 0.5ms;
}
.router-link-active {
  color: white;
  border-bottom: 2px solid transparent;
  border-color: #ff6347;
}
</style>
