<script setup>
// The end of a case: the next three cases in Home's order (wrapping round
// at the end of the list) and a link back to all cases. Renders nothing on
// pages that are not in the list (My process, Daily UI).
const props = defineProps({
  count: { type: Number, default: 3 },
});

const route = useRoute();
const nextCases = computed(() => {
  const current = route.path.replace(/^\//, "").split("/")[0];
  const at = CASE_ORDER.findIndex(
    (name) => name.toLowerCase() === current.toLowerCase(),
  );
  if (at === -1) return [];
  const others = CASE_ORDER.length - 1;
  return Array.from(
    { length: Math.min(props.count, others) },
    (_, i) => CASE_ORDER[(at + 1 + i) % CASE_ORDER.length],
  );
});
</script>

<template>
  <section v-if="nextCases.length" class="next-case" aria-label="More cases">
    <div data-duration=".5s" data-delay=".15s" class="detail_title anim">
      <PageTitle :level="1">More cases</PageTitle>
      <PageTitle :level="3">Pick the next one, or see them all</PageTitle>
    </div>
    <section class="products">
      <ProjectButton v-for="name in nextCases" :key="name" :project="name" />
    </section>
    <NuxtLink class="next-case_all" to="/#cases">See all cases</NuxtLink>
  </section>
</template>

<style lang="postcss">
.next-case {
  @apply w-full flex flex-col items-center gap-10 mt-10 pb-16 md:pb-0;
  .products {
    @apply w-full;
  }
  .next-case_all {
    @apply text-yellow-600 font-semibold underline underline-offset-4;
  }
}
</style>
