<script setup lang="ts">
import type { ProjectsI } from "./types/index";
defineProps<{
  projects: ProjectsI[];
}>();
</script>

<template>
  <div v-for="project in projects">
    <NuxtLink :to="project.link" target="_blank" class="no-underline">
      <Card>
        <template #title>{{ project.label }}</template>
        <template #content>
          <p class="m-0">
            {{ project.description }}
          </p>
        </template>
      </Card>
    </NuxtLink>
  </div>
</template>
