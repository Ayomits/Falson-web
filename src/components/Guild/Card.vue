<template>
  <div
    class="flex flex-col rounded-2xl font-dmsans bg-general max-h-25 max-w-[370px] flex-col mt-[15px]"
  >
  </div>
</template>

<script lang="ts" setup>
import { DefaultAvatars } from "~/constants";
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
    iconUrl = DefaultAvatars.Avatar2;
    bannerUrl = DefaultAvatars.Avatar2;
  }
}
if (guild.icon) {
  iconUrl = guild.icon;
}
</script>

<style></style>
