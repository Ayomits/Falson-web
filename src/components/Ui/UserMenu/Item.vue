<template>
  <li class="flex items-center">
    <img :src="iconPath" alt="idk" />
    <NuxtLink
      v-if="linkTo"
      :to="linkTo"
      :class="`px-4 py-2 hover:bg-gray-200 text-[${optionColor}] hover:text-[${optionHoverColor}] cursor-pointer`"
    >
      {{ name }}
    </NuxtLink>
    <li
      v-if="!linkTo"
      :class="`px-4 py-2 hover:bg-gray-200 text-[${optionColor}] hover:text-[${optionHoverColor}] cursor-pointer`"
    >
      {{ name }}
    </li>
    <slot />
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
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
});
</script>

<style scoped></style>