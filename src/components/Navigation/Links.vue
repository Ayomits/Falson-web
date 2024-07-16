<template>
  <NuxtLink to="/">Главная</NuxtLink>
  <NuxtLink to="/commands">Команды</NuxtLink>
  <NuxtLink to="/history">История</NuxtLink>
  <NuxtLink to="/status">Статус</NuxtLink>
  <NuxtLink to="/donate">Поддержите нас</NuxtLink>
</template>

<script lang="ts" setup></script>

<style scoped>
.nuxt-link-active {
  color: #fff;
  border-bottom: 3px solid white;
}

a:hover {
  color: white;
}

@media (max-width: 640px) {
  .nuxt-link-active {
    color: #fff;
    border: none;
  }
}
</style>
