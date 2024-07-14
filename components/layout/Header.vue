<template>
  <header class="bg-general drop-shadow-xl sticky z-10">
    <div
      class="pt-[15px] pb-[10px] my-0 mx-auto max-w-[1200px] flex justify-between items-center"
    >
      <div class="font-lato font-extrabold text-3xl">
        <RouterLink :to="FalsonRoutes.HOME"> Falson </RouterLink>
      </div>
      <LayoutNavigation class="mt-[10px]" />
      <LayoutAuth />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { FalsonRoutes } from "~/routes";

const something = ref<number>(10);
const calculate = computed((): number => 2 + 2);
</script>

<style></style>
