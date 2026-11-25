<script setup>
import { ref } from "vue";
import projectsData from "@/data/projects.json";

defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

// One panel is always open, like the reference component. Hover, focus and
// click all move it, so a keyboard and a touch screen can reach every case.
const active = ref(0);
</script>

<template>
  <div
    id="cases"
    data-duration=".5s"
    data-delay=".15s"
    class="cases anim"
    @mouseleave="active = 0"
  >
    <NuxtLink
      v-for="(project, index) in projects"
      :key="project"
      :to="`/${project}`"
      class="cases__item"
      :class="{ 'cases__item--active': active === index }"
      @mouseenter="active = index"
      @focus="active = index"
      @click="active = index"
    >
      <img
        :src="projectsData[project].image.url"
        :alt="projectsData[project].image.alt"
        loading="lazy"
        decoding="async"
      />
      <span class="cases__detail">
        <span class="cases__title">{{ projectsData[project].title }}</span>
        <span class="cases__description">
          {{ projectsData[project].description }}
        </span>
      </span>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.cases {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  width: 100%;

  .cases__item {
    position: relative;
    display: block;
    flex: 1 1 0;
    min-width: 0;
    height: 24rem;
    overflow: hidden;
    border-radius: 1.5rem;
    text-decoration: none;
    transition: flex-grow 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cases__item--active {
    flex-grow: 4;

    .cases__detail {
      opacity: 1;
    }
  }

  .cases__detail {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.25rem;
    padding: 1.5rem;
    opacity: 0;
    color: #ffffff;
    background: linear-gradient(
      to top,
      rgba(14, 13, 15, 0.75),
      rgba(14, 13, 15, 0) 55%
    );
    transition: opacity 0.3s ease;
  }

  .cases__title {
    font-family: "Bitter", serif;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  .cases__description {
    font-family: "Open Sans", sans-serif;
    font-size: 0.9rem;
    color: #f69c2a;
  }

  // Hover cannot open a panel on a touch screen, so the cases stack and show
  // their title straight away.
  @media (max-width: 960px) {
    flex-direction: column;

    .cases__item,
    .cases__item--active {
      flex: 0 0 12rem;
      flex-grow: 0;
    }

    .cases__detail {
      opacity: 1;
    }
  }
}
</style>
