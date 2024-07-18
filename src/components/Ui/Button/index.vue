<template>
  <div>
    <button class="greatingsButton drop-shadow-2xl">
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
button {
  background-color: #353535;
  width: 150px;
  height: 50px;
  border-radius: 25px;
}
button:hover {
  background-color: #3d3d3d;
}
</style>
