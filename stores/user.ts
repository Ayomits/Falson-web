import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    userId: `32424`,
    tokens: {
      accessToken: `32423ertfd`,
      refreshToken: `ergtrf,.ghgfhfgre.lkjhhgtgh`,
    },
  }),
  actions: {},
});
