<template>
  <div class="grid bg-general max-h-54 max-w-54">
    <img width="50":src="guild.icon ? guild.icon : DefaultAvatars.Avatar2" alt="">
  </div>
</template>

<script lang="ts" setup>
import { DefaultAvatars } from "~/constants";
import type { UserGuildResponse } from "~/types";

const { guild } = defineProps<{
  guild: UserGuildResponse;
}>();

console.log(toRaw(guild));
</script>

<style></style>
