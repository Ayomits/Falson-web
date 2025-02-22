import { defineStore } from "pinia";
import type { UserDiscordResponse } from "~/types";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as UserDiscordResponse | null,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    saveUser(exceptedUser: UserDiscordResponse) {
      this.user = exceptedUser as any;
    },
  },
},);
