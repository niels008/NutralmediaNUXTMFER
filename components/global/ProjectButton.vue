<script setup lang="ts">
import projectsData from "@/data/projects.json";
import type { CaseName } from "~/utils/caseOrder";

const props = defineProps<{
  project: CaseName;
}>();

const entry = computed(() => projectsData[props.project]);
</script>

<template>
  <section data-duration=".5s" data-delay=".15s" class="product anim">
    <NuxtLink :to="`/${project}`">
      <div class="product_detail">
        <h2>{{ entry.title }}</h2>
        <p class="product_detail_text">
          {{ entry.description }}
        </p>
      </div>
    </NuxtLink>
    <img
      class="bgproject"
      :src="entry.image.url"
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
    />
  </section>
</template>

<style lang="postcss">
.product {
  @apply m-0 flex z-10 flex-1 p-4 relative items-center justify-center transition;
  height: calc((100vh / 3) - 1em);

  .bgproject {
    @apply flex-1 blur-sm grayscale absolute top-0 left-0 w-full h-full object-cover aspect-[3/2] mix-blend-multiply opacity-10 -z-50;
  }
}
</style>
