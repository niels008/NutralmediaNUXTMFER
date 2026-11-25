<script setup>
useScrollReveal();
</script>

<template>
  <div class="project">
    <div class="menu-wrap">
      <BackButton />
      <Logo variant="small" />
    </div>
    <slot />
  </div>
</template>
