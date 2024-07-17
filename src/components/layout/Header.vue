<template>
  <header class="bg-general drop-shadow-2xl py-3 sticky z-10">
    <div class="flex justify-between items-center max-w-[1200px] mx-auto">
      <div class="font-lato font-extrabold text-3xl sm:text-1xl">
        <NuxtLink to="/"> Falson </NuxtLink>
      </div>
      <Navigation @toggle-menu="handleToggleMenu" />
      <Suspense>
        <LazyAuth :user="data as UserDiscordResponse" />
        <template #fallback>
          <UiSpinner />
        </template>
      </Suspense>
    </div>
  </header>
  <div
    v-if="isShowed && isSmall"
    class="mobile-navigation max-w-[200px] bg-general border-none mt-[15px] rounded-2xl py-4"
  >
    <div class="flex flex-col max-w-[50%] mx-auto font-lato font-bold gap-2">
      <NavigationLinks />
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

import { backendUrl } from "~/constants";
import type { UserDiscordResponse } from "~/types";

const authStore = useAuthStore();

const fetchUserData = async () => {
  return await $fetch<UserDiscordResponse>(`${backendUrl}/users/@me/data`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${authStore.accessToken}`,
    },
  });
};

const { data, suspense } = useQuery({
  queryKey: ["userData"],
  queryFn: fetchUserData,
});

await suspense();
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
