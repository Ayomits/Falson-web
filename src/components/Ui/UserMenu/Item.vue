<template>
  <div
    @click="linkTo ? navigateTo(linkTo) : null"
    class="flex py-2 hover:bg-[#3D3D3D] ml-5 gap-2 items-center"
  >
    <img :src="iconPath" />
    <p :class="`text-[${optionColor}] hover:text-[${optionHoverColor}]`">
      {{ name }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  iconPath: {
    type: String,
    required: true,
  },
  optionColor: {
    type: String,
    required: true,
  },
  optionHoverColor: {
    type: String,
    required: true,
  },
  linkTo: {
    type: String,
    required: false,
  },
  bgHoverColor: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
