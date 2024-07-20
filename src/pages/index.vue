<template>
  <Suspense>
    <template #default>
      <NuxtLayout>
        <transition name="fade" mode="out-in">
          <div key="content">
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
            <LayoutFooter class="mt-48 mb-24" />
          </div>
        </transition>
      </NuxtLayout>
    </template>
    <template #fallback>
      <Preloader />
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import { Advantages, Staff } from "~/constants";

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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
