import { defineStore } from "pinia";

export const useTokensStore = defineStore({
  id: "tokensStore",
  state: () => ({
    accessToken: "",
    refreshToken: "",
  }),
  getters: {
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    getAllTokes: (state) => {
      state.accessToken, state.refreshToken;
    },
  },
  actions: {
    setTokens(accessToken: string, refreshToken: string) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    },
    fetchTokens() {
      const accessToken = useCookie(`accessToken`).value;
      const refreshToken = useCookie(`refreshToken`).value;
      if (!accessToken && refreshToken) {
        // TODO: refresh token with Falson API
        return;
      }
      if (accessToken && refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        return;
      }
    },
  },
});
