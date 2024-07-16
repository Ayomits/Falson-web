<template>
  <div class="sm:text-[40px] flex flex-col items-center justify-center md:text-[80px] sd:text-[60px] text-[100px] font-dmsans font-bold h-screen">
    <div class="flex flex-row items-center gap-4">
      <img src="@/assets/imgs/logo.svg" alt="Logo" />
      <p class="sm:text-[50px] sm:hidden mt-[60px]">Falson</p>
    </div>
    <div class="sm:text-2xl flex items-center flex-col mt-8 text-5xl">
      <p>А вы знали?</p>
      <p class="text-xl mt-4">Весь код Falson делался 1 человеком</p>
      <div class="loader mt-[100px]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader {
  border: 15px solid #383737;
  border-left-color: #ffffff;
  border-radius: 60%;
  width: 154px;
  height: 154px;
  animation: spin 2s linear infinite;
}
</style>
