import { defineStore } from "pinia";
import { apiClient } from "../api";
import { ENDPOINTS } from "../api/endpoints";
import { ApiError, NetworkError } from "../api/errors";

export interface SignInPayload {
  email: string;
  password: string;
}

type _State = {
  _isSignInLoad: boolean;
  _isSignInError: boolean;
};

export const useAuthStore = defineStore("auth", {
  state: (): _State => ({
    _isSignInLoad: false,
    _isSignInError: false,
  }),
  getters: {},
  actions: {
    async signin(payload: SignInPayload) {
      // try {
      await apiClient.post(ENDPOINTS.signIn, payload);
      await navigateTo("/dashboard");
      // } catch (e) {
      //   if (e && e.NetworkError) {
      //     throw new NetworkError("Erreur réseau lors de la requête");
      //   } else if (e.ApiError) {
      //     throw new ApiError("Erreur lors de la requête API", e);
      //   } else {
      //     throw new Error("Une erreur inattendue est survenue");
      //   }
      // }
    },
  },
});
