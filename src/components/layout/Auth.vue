<template>
  <div>
    <button
      @click="navigateTo(``)"
      class="bg-components font-text font-roboto p-2 rounded-[5px] hover:bg-components-hover hover:text-white"
    >
      Авторизироваться
    </button>
  </div>
</template>

<script lang="ts" setup>
const state = useAuthStore();
</script>

<style></style>
