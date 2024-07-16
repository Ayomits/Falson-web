<template>
  <div>
    <div class="md:hidden flex items-center"></div>
    <div class="nav md:flex gap-5 font-dmsans font-bold items-center">
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/commands">Команды</NuxtLink>
      <NuxtLink to="/history">История</NuxtLink>
      <NuxtLink to="/status">Статус</NuxtLink>
      <NuxtLink to="/donate">Поддержите нас</NuxtLink>
    </div>
  </div>
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
</style>

<style>
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
}
</style>
