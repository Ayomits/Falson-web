<template>
  <header class="bg-general sm:text-[10px] drop-shadow-xl sticky z-10 sticky">
    <div
      class="pt-[15px] pb-[10px] my-0 mx-auto max-w-[1200px] flex justify-between items-center"
    >
      <div class="font-lato font-extrabold text-3xl order-0 sm:order-0">
        <NuxtLink to="/"> Falson </NuxtLink>
      </div>
      <div
        class="sm:hidden flex gap-5 mt-[10px] items-center font-lato font-bold"
      >
        <LayoutNavigation />
      </div>
      <div class="sm:hidden">
        <LayoutAuth />
      </div>
      <div
        class="sm:block hidden"
        :class="{ hidden: !isSmall }"
        @click="toggleMenu"
      >
        <img width="40" src="@/assets/imgs/burger-bar.svg" alt="" />
      </div>
    </div>
  </header>
  <div
    v-if="isShowed && isSmall"
    class="bg-general max-w-[1200px] mx-auto flex flex-col items-start gap-4"
  >
    <div class="sm:gap-3 flex flex-col items-start">
      <LayoutNavigation class="" />
      <LayoutAuth />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const isShowed = ref<boolean>(false);
const isSmall = ref<boolean>(false);
const menuRef = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isShowed.value = !isShowed.value;
};

const handleResize = () => {
  if (window.innerWidth < 768) {
    isSmall.value = true;
  } else {
    isSmall.value = false;
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isShowed.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  document.removeEventListener("click", handleClickOutside);
});

handleResize();
</script>

<style scoped>
header::before {
  content: "";
  background-color: #232323;
}

.flex-col {
  flex-direction: column;
}

.items-start {
  align-items: flex-end;
}
</style>
