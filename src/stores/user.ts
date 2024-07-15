import { defineStore } from "pinia";
import { backendUrl } from "~/constants";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    userData: {},
    guildsData: {},
  }),
  getters: {
    getUserData(state) {
      return state.userData;
    },
    getGuildsData(state) {
      return state.guildsData;
    },
  },
  actions: {
    async fetchAll() {
      const [userData, guildsData] = await Promise.all([
        this.fetchUserData(),
        this.fetchGuilds(),
      ]);
      this.userData = (userData as any).data as {};
      this.guildsData = (guildsData as any).data as {};

      return { userData, guildsData };
    },
    async fetchGuilds() {
      const authState = useAuthStore();
      if (!authState.isAuth) {
        return null;
      }
      return $fetch(`${backendUrl}/users/@me/data`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
        },
      });
    },
    async fetchUserData() {
      const authState = useAuthStore();
      if (!authState.isAuth) {
        return null;
      }
      return $fetch(`${backendUrl}/users/@me/guilds`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
        },
      });
    },
  },
});
