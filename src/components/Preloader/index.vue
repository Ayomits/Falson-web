<template>
  <div
    class="sm:text-[40px] flex flex-col items-center justify-center md:text-[80px] sd:text-[60px] text-[100px] font-dmsans font-bold h-screen"
  >
    <div class="flex flex-row items-center gap-4">
      <img src="@/assets/imgs/logo.svg" alt="Logo" />
      <p class="sm:text-[50px] sm:hidden mt-[60px]">Falson</p>
    </div>
    <div class="sm:text-2xl flex items-center flex-col mt-8 text-5xl">
      <p>А вы знали?</p>
      <p class="text-xl mt-4">Весь код Falson делался 1 человеком</p>
      <UiSpinner class="mt-[100px]" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
