<script lang="ts" setup>
import { useUser } from "../stores/user.store";

const userStore = useUser();

definePageMeta({
  middleware: ["access-token"],
});
</script>

<template>
  <div v-if="userStore.accessToken">
    access token {{ userStore.accessToken }}
  </div>
  <div v-else>
    <Skeleton class="mb-2"></Skeleton>
    <Skeleton width="10rem" class="mb-2"></Skeleton>
    <Skeleton width="5rem" class="mb-2"></Skeleton>
    <Skeleton height="2rem" class="mb-2"></Skeleton>
    <Skeleton width="10rem" height="4rem"></Skeleton>
  </div>
</template>

<style></style>
