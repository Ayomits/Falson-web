<template>
  <div class="loader">
    <div class="spinner">
      <UiSpinnerImg />
    </div>
    <div class="inner-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts" setup></script>

<script lang="ts" setup></script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.spinner {
  position: absolute;
  animation: spin 1s infinite;
}

.inner-content {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
