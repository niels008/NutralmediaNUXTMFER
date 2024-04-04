<script setup>
import Footer from "@/components/global/Footer.vue";
import BacktoTopButton from "@/components/global/BacktoTopButton.vue";
</script>

<template>
  <div class="main">
    <section class="detail gap-36">
      <slot />
    </section>
    <Footer />
  </div>
  <BacktoTopButton />
</template>
