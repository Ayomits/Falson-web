<template>
  <div class="input-container">
    <input
      class="input-with-icon"
      type="text"
      placeholder="Введите название сервера"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.input-container {
  position: relative;
  width: 100%;
  color: black;
}

.input-with-icon {
  width: 100%;
  padding-left: 40px; 
  height: 40px;
  border-radius: 2xl;
}

.input-with-icon::placeholder {
  color: rgb(0, 0, 0);  
}

.input-container::before {
  content: "";
  position: absolute;
  left: 10px; /* Расположение иконки */
  top: 50%;
  transform: translateY(-50%);
  width: 20px; /* Ширина иконки */
  height: 20px; /* Высота иконки */
  background: url("@/assets/imgs/search.svg") no-repeat center;
  background-size: contain; /* Автоматическое масштабирование иконки */
}
</style>
