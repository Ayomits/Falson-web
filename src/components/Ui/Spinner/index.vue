<template>
  <div class="loader"></div>
</template>

<script lang="ts" setup></script>

<style>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader {
  border: 15px solid #383737;
  border-left-color: #ffffff;
  border-radius: 60%;
  animation: spin 2s linear infinite;
}
</style>
