<script setup lang="ts">
import ProjectsList from "./ProjectsList.vue";
import type { ProjectsI } from "./types/index";

const projects: ProjectsI[] = [
  {
    label: "breakfeastwheel",
    description: "Use clean archi to build an wheel breakfeast management",
    image: "",
    link: "https://github.com/Ichtuus/breakfeastwheel",
  },
  {
    label: "paukedex",
    description: "Webcomponent project with lit-element library",
    image: "",
    link: "https://github.com/Ichtuus/paukedex",
  },
  {
    label: "design-system",
    description: "Build my own design systeem",
    image: "",
    link: "https://github.com/Ichtuus/design-system",
  },
];
</script>

<template>
  <div
    id="projects"
    class="border-round border-noround-bottom w-full bg-primary font-bold flex flex-wrap gap-5 align-items-center justify-content-center p-5"
  >
    <div class="flex w-full justify-content-center">
      <h2 class="text-5xl font-bold text-900">
        {{ $t("ichtus_sample__projects-block--title-label") }}
      </h2>
    </div>
    <projects-list :projects="projects"></projects-list>
  </div>
</template>
