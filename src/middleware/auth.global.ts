// Только сбор токенов
import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to: any, from: any) => {
  const authStore = useAuthStore();
  authStore
    .fetchTokens()
    .then((data) => {
      if (data) {
        authStore.setIsAuth(true);
      } else {
        authStore.setIsAuth(false);
      }
    })
    .catch((err) => {
      authStore.setIsAuth(false);
    });
});
