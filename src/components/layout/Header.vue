<template>
  <header class="bg-general drop-shadow-xl sticky z-10 sticky">
    <div
      class="pt-[15px] pb-[10px] my-0 mx-auto max-w-[1200px] flex justify-between items-center"
    >
      <div class="font-lato font-extrabold text-3xl">
        <NuxtLink to="/">
          Falson
        </NuxtLink>
      </div>
      <LayoutNavigation class="mt-[10px]" />
      <LayoutAuth/>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style scoped>
header::before {
  content: "";
  background-color: #232323;
}
</style>
