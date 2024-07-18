<template>
  <div class="flex flex-col items-center justify-center mt-[10%]">
    <UiLogo />
    <div class="flex flex-col justify-center items-center gap-2">
      <p class="font-dmsans sm:text-[15px] font-bold text-2xl">Ой-ой! данная страница пропала или не существует</p>
      <UiButton class="">
        <NuxtLink to="/">
          На главную
        </NuxtLink>
      </UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
