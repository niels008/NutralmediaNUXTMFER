<script setup>
// Shared "At a glance" facts row for case studies.
// facts: [{ label, value }] — leave value empty to show a marked placeholder.
defineProps({
  facts: { type: Array, required: true },
});
</script>

<template>
  <section
    data-duration=".5s"
    data-delay=".3s"
    class="case-glance anim"
    aria-labelledby="case-glance-title"
  >
    <h2 id="case-glance-title" class="case-glance_title">At a glance</h2>
    <dl class="case-glance_facts">
      <div v-for="fact in facts" :key="fact.label" class="case-glance_fact">
        <dt>{{ fact.label }}</dt>
        <dd v-if="fact.value">{{ fact.value }}</dd>
        <dd v-else class="case-placeholder">
          [Placeholder: {{ fact.hint || fact.label.toLowerCase() }}]
        </dd>
      </div>
    </dl>
  </section>
</template>

<style lang="scss">
.case-glance {
  width: 100%;
  max-width: 1280px;
  align-self: center;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 1.5rem 0;
  .case-glance_title {
    font-family: "Open Sans", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #f69c2a;
    margin-bottom: 1rem;
  }
  .case-glance_facts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 2rem;
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }
  }
  dt {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    color: #6b6b6b;
    margin-bottom: 0.25rem;
  }
  dd {
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.4;
    color: #1e1f1f;
  }
}
</style>
