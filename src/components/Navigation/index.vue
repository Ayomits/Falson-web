<template>
  <div @click="togleMenu" class="hidden sm:order-first sm:block">
    <img src="@/assets/imgs/burger-bar.svg" alt="" />
  </div>
  <div class="sm:hidden flex items-center font-bold font-lato gap-4 mt-[10px]">
    <NavigationLinks />
  </div>
</template>

<script lang="ts" setup>
const isShowed = ref<boolean>(false);
const isSmall = ref<boolean>(false);
const menuRef = ref<HTMLElement | null>(null);
const emit = defineEmits(["toggle-menu"]);

const togleMenu = () => {
  isShowed.value = !isShowed.value;
  emit("toggle-menu", { isSmall: isSmall.value, isShowed: isShowed.value });
};

const handleResize = () => {
  isSmall.value = window?.innerWidth < 768;
  emit("toggle-menu", { isSmall: isSmall.value, isShowed: isShowed.value });
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isShowed.value = false;
    emit("toggle-menu", { isSmall: isSmall.value, isShowed: isShowed.value });
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
handleResize()
</script>

<style scoped></style>
