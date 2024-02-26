<script setup lang="ts">
import AboutView from "./AboutView.vue";
import ProjectsView from "./projects/ProjectsView.vue";
import SkillsView from "./SkillsView.vue";

async function addTodo() {
  const todo = await $fetch("/api/auth/login", {
    method: "POST",
    body: {
      // My todo data
    },
  });
}
</script>

<template>
  <button @click="addTodo">test</button>
  <about-view />
  <skills-view />
  <projects-view />
</template>
