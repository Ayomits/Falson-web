import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "authStore",
  state: () => ({
    isAuth: false,
  }),
  getters: {
    getIsAuth: (state) => state.isAuth,
  },
  actions: {
    setIsAuth() {
      this.isAuth = !this.isAuth;
    },
  },
});
