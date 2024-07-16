<template>
  <div
    class="flex flex-col rounded-2xl drop-shadow-2xl bg-general max-w-[565px] max-h-auto px-5 py-2 font-lato"
  >
    <p class="font-extrabold text-2xl">{{ title }}</p>
    <p class="py-2 text-[16px]">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
