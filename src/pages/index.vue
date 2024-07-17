// Main page

<template>
  <NuxtLayout>
    <Greatings />
    <NuxtPage />
    <div class="flex justify-center items-center mt-[100px]">
      <div class="sm:flex sm:flex-col grid grid-cols-2 gap-[50px]">
        <AdvantageCard
          v-for="advantage in Advantages"
          :key="advantage.title"
          :title="advantage.title"
          :description="advantage.description"
        />
      </div>
    </div>
    <div class="flex justify-center items-center mt-[150px]">
      <div
        class="sm:flex sm:flex-col col-start-2 grid grid-cols-3 gap-[50px]"
      >
        <DevelopersCard
          v-for="dev in Staff"
          :key="dev.userId"
          :userId="dev.userId"
          :role="dev.role"
        />
      </div>
    </div>
    <LayoutFooter class="mt-48 mb-24"/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Advantages, Staff } from "~/constants";

// META
useHead({
  title: "Falson",
  meta: [
    {
      name: `description`,
      content: `Лучший бот для решения проблемы верификации на вашем сервере`,
    },
  ],
});
</script>

<style></style>
