// Эта мидлварь уже редиректит

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuth } = useAuthStore();
  if (!isAuth) {
    return navigateTo("/");
  }
});
