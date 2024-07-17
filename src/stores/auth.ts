import { defineStore } from "pinia";
import { backendUrl } from "~/constants";

export const useAuthStore = defineStore({
  id: "authStore",
  state: () => ({
    isAuth: false,
    accessToken: null as string | null,
    refreshToken: null as string | null,
  }),
  getters: {
    getIsAuth: (state) => state.isAuth,
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    getAllTokes: (state) => {
      state.accessToken, state.refreshToken;
    },
  },
  actions: {
    setIsAuth(isAuth: boolean = false) {
      this.isAuth = isAuth;
    },
    setTokens(accessToken: string | null, refreshToken: string | null) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    },
    async fetchTokens() {
      const accessTokenCookie = useCookie("accessToken", {
        maxAge: 15 * 60,
        sameSite: "strict",
        secure: true,
      });
      const refreshTokenCookie = useCookie("refreshToken");
      const accessToken = accessTokenCookie.value;
      const refreshToken = refreshTokenCookie.value;

      if (!accessToken && refreshToken) {
        const { data, error } = await useFetch(`${backendUrl}/auth/token`, {
          method: "POST",
          body: JSON.stringify({ token: refreshToken }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (error.value) {
          console.error("Failed to refresh token:", error.value);
          return;
        }

        const newAccessToken = (data.value as { accessToken: string })
          ?.accessToken;

        if (newAccessToken) {
          this.setTokens(newAccessToken, refreshToken);
          accessTokenCookie.value = newAccessToken;
          return { accessToken: newAccessToken, refreshToken };
        }
      }

      if (accessToken && refreshToken) {
        this.setTokens(accessToken, refreshToken);
        return { accessToken, refreshToken };
      }

      return null;
    },
    logout() {
      this.setTokens(null, null);
      useCookie("accessToken").value = null;
      useCookie("refreshToken").value = null;
      this.setIsAuth(false);
      return navigateTo(`/`);
    },
  },
});
