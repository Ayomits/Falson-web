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
  width: 154px;
  height: 154px;
  animation: spin 2s linear infinite;
}
</style>
