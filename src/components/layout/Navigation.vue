<template>
  <NuxtLink to="/">Главная</NuxtLink>
  <NuxtLink to="/commands">Команды</NuxtLink>
  <NuxtLink to="/history">История</NuxtLink>
  <NuxtLink to="/status">Статус</NuxtLink>
  <NuxtLink to="/donate">Поддержите нас</NuxtLink>
</template>

<script lang="ts" setup></script>

<style scoped>
a:hover {
  color: white;
  transition-delay: 0.5ms;
}
.nuxt-link-active {
  color: white;
  border-bottom: 2px solid transparent;
  border-color: #ffffff;
}

@media (max-width: 768px) {
  .nav {
    display: flex;
    flex-direction: column;
  }
  .menu-enter-active,
  .menu-leave-active {
    transition: max-height 0.5s ease-in-out;
  }
  .menu-enter,
  .menu-leave-to {
    max-height: 0;
  }
  .menu-enter-to,
  .menu-leave {
    max-height: 100vh;
  }
  .nuxt-link-active {
    color: white;
    border: none;
  }
}
</style>
