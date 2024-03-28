import { useUser } from "../stores/user.store";

export default defineNuxtRouteMiddleware(async () => {
  // See that here https://nuxt.com/docs/guide/directory-structure/middleware#when-middleware-runs
  if (process.server) return;
  const { accessToken } = await $fetch("/api/auth/access-token", {
    method: "POST",
    body: {},
  });

  if (accessToken) {
    const userStore = useUser();
    userStore.accessToken = accessToken as string;
  } else {
    return navigateTo("/");
  }
});
