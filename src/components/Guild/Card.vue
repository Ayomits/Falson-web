<template>
  <div
    @click="
      guild.invited
        ? navigateTo(`/dashboard/${guild.guildId}`)
        : navigateTo(`${backendUrl}/auth/discord/${guild.guildId}/invite`, {
            external: true,
          })
    "
    class="drop-shadow-2xl flex flex-col bg-general w-[350px] h-[200px] rounded-2xl overflow-hidden hover:bg-components-hover cursor-pointer"
  >
    <div class="relative w-full h-[50%]">
      <img
        class="w-full h-full object-cover blur-lg"
        :src="bannerUrl ? bannerUrl : DefaultAvatars.Avatar2"
        alt=""
      />
      <img
        class="absolute left-4 bottom-[10px] left-[25px] rounded-full h-[70px] border-4 border-general"
        :src="iconUrl"
        alt=""
      />
      <p
        class="absolute text-text top-[45px] left-[115px] font-bold font-dmsans text-2xl"
      >
        {{ guild.name }}
      </p>
    </div>
    <div class="flex gap-3 items-center mt-10 ml-5 font-dmsans text-xl">
      <div class="flex gap-3 items-center" v-if="guild.invited">
        <UiMembersIcon />
        <p class="text-[#A6A6A6]">Участников:</p>
        <p>{{ guild.memberCount }}</p>
      </div>
      <div v-else>
        <p>Пригласить</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  backendUrl,
  BackgroundLink,
  DefaultAvatars,
  SupportServerLink,
} from "~/constants";
import type { UserGuildResponse } from "~/types";

const { guild } = defineProps<{
  guild: UserGuildResponse;
}>();

let [bannerUrl, iconUrl] = ["", ""];

if (guild.banner) {
  bannerUrl = guild.banner;
} else {
  if (guild.icon) {
    bannerUrl = guild.icon;
    iconUrl = guild.icon;
  } else {
    iconUrl = DefaultAvatars.Avatar4;
    bannerUrl = BackgroundLink;
  }
}
if (guild.icon) {
  iconUrl = guild.icon;
}
</script>

<style></style>
