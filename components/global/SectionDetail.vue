<script setup>
defineProps({
  extraSpacing: Boolean,
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