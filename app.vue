<script>
import { provide, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      menuOpen: false,
    });
    provide("state", state);
  },
};
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
