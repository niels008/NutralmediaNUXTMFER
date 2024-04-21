<script setup>
import { defineProps } from 'vue';
import Footer from "@/components/global/Footer.vue";
import BacktoTopButton from "@/components/global/BacktoTopButton.vue";

const props = defineProps({
  extraSpacing: Boolean
});
</script>

<template>
  <div class="main">
    <section :class="['detail', { 'gap-20': extraSpacing }]">
      <slot />
    </section>
    <Footer />
  </div>
  <BacktoTopButton />
</template>