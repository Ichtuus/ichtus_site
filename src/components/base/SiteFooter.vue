<script setup lang="ts">
import { computed } from "vue";

const currentDateYear = computed(() => new Date().getFullYear());
const linkedinUrl = "https://www.linkedin.com/in/nicolas-d-5b6708162/";
const phoneNbr = "tel:0650210393";
</script>

<template>
  <footer class="surface-900 text-white font-bold p-8 flex">
    <div class="flex-1">
      © {{ currentDateYear }} with <span class="text-red-600">♥</span> by
      Nicolas Diarra
    </div>
    <div class="flex gap-5 flex-1 justify-content-end">
      <NuxtLink :to="linkedinUrl" target="_blank">
        <i
          class="pi pi-linkedin"
          style="color: var(--surface-0); font-size: 1.5rem"
        />
      </NuxtLink>
      <a :href="phoneNbr"
        ><i
          class="pi pi-phone"
          style="color: var(--surface-0); font-size: 1.5rem"
      /></a>
    </div>
  </footer>
</template>
