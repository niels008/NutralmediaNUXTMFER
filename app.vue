<script setup>
import { provide, reactive } from "vue";

const state = reactive({
  menuOpen: false,
});
provide("state", state);

useHead({
  titleTemplate: (title) =>
    title ? `${title} | Niels de Bont` : "Niels de Bont — Digital Product Designer",
  // Without JavaScript the reveal animation never runs, so the content must
  // not stay at opacity 0.
  noscript: [{ children: "<style>.anim{opacity:1}</style>" }],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import "./assets/sass/main.scss";

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
