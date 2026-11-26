<script setup>
defineProps({
  extraSpacing: Boolean,
});
</script>

<template>
  <div class="main">
    <section :class="['detail', { 'gap-20': extraSpacing }]">
      <slot />
      <MoreCases />
    </section>
    <Footer />
  </div>
  <BacktoTopButton />
</template>