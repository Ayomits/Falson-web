<template>
  <button
    v-if="!authStore.isAuth"
    @click="redirectToLogin"
    class="bg-components font-text font-roboto p-2 rounded-[5px] hover:bg-components-hover hover:text-white"
  >
    Авторизироваться
  </button>
  <div
    @click="toggleMenu"
    v-if="authStore.isAuth"
    class="flex gap-4 items-center font-dmsans font-bold cursor-pointer hover:text-white relative"
    ref="menuRef"
  >
    <div class="flex gap-4 items-center">
      <p class="sm:hidden mt-[10px]">{{ userStore.user?.global_name }}</p>
      <NuxtImg
        :src="getUserAvatar"
        class="rounded-3xl sm:order-last"
        width="50"
        alt="user avatar"
      />
    </div>
    <div
      v-show="isOpened"
      class="absolute top-5 right-0 mt-12 bg-white shadow-lg rounded-lg w-48 sm:right-2"
    >
      <UiUserMenu class="bg-[#262626] rounded-2xl">
        <UiUserMenuItem
          name="Профиль"
          :icon-path="profile"
          option-color="#E0E0E0"
          option-hover-color="#FFFFFF"
          link-to="profile"
          bg-hover-color="#3D3D3D"
        />
        <UiUserMenuItem
          name="Мои серверы"
          :icon-path="servers"
          option-color="#E0E0E0"
          option-hover-color="#FFFFFF"
          link-to="servers"
          bg-hover-color="#3D3D3D"
        />
        <UiUserMenuItem
          @click="authStore.logout"
          name="Выход"
          :icon-path="logout"
          option-color="#C93232"
          option-hover-color="#FFFFFF"
          bg-hover-color="#3D3D3D"
        />
      </UiUserMenu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { backendUrl, DefaultAvatars } from "~/constants";
import { useUserStore } from "~/stores/user";
import { useAuthStore } from "~/stores/auth";
import profile from "@/assets/imgs/profile.svg";
import servers from "@/assets/imgs/servers.svg";
import logout from "@/assets/imgs/logout.svg";

const userStore = useUserStore();
const authStore = useAuthStore();

const isOpened = ref<boolean>(false);
const menuRef = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isOpened.value = !isOpened.value;
};

const getUserAvatar = computed(() => {
  return userStore.user
    ? `https://cdn.discordapp.com/avatars/${userStore.user.id}/${userStore.user.avatar}.png`
    : DefaultAvatars.Avatar3;
});

const redirectToLogin = async () => {
  await navigateTo(`${backendUrl}/auth/discord/login`, { external: true });
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isOpened.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
p:hover {
  color: white;
}
</style>
