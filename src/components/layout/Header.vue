<template>
  <header class="bg-general drop-shadow-2xl py-3 sticky z-10">
    <div class="flex justify-between items-center max-w-[1200px] mx-auto">
      <div class="font-lato font-extrabold text-3xl sm:text-1xl">
        <NuxtLink to="/"> Falson </NuxtLink>
      </div>
      <Navigation @toggle-menu="handleToggleMenu" />
      <LayoutAuth />
    </div>
  </header>
  <div
    v-if="isShowed && isSmall"
    class="mobile-navigation max-w-[200px] bg-general border-none mt-[15px] rounded-2xl py-4"
  >
    <div class="flex flex-col max-w-[50%] mx-auto font-lato font-bold gap-2">
      <LayoutNavigationLinks />
    </div>
  </div>
</template>

<script lang="ts" setup>
const isShowed = ref<boolean>(false);
const isSmall = ref<boolean>(false);

const handleToggleMenu = (obj: { isSmall: boolean; isShowed: boolean }) => {
  isSmall.value = obj.isSmall;
  isShowed.value = obj.isShowed;
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 20;
}

.mobile-navigation {
  position: fixed;
  top: 60px;
  left: 15%;
  transform: translateX(-30%);
  width: 150px;
  z-index: 30;
}
</style>
