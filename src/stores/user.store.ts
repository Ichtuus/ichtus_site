import { defineStore } from "pinia";

interface State {
  accessToken: string | null;
}

export const useUser = defineStore("useUser", {
  state: (): State => ({
    accessToken: null,
  }),
});
